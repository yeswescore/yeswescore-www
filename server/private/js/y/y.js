// Global Object
(function (global, undefined) {
  /*#ifdef STRICT*/
  "use strict";
  /*#endif*/

  var YesWeScore = {
    language: window.navigator.language || "en-US",
    Conf: null,      // @see y/conf.js
    Router: null,    // @see y/router.js
    Templates: null, // @see y/tempates.js
    Views: { Pages: { } },       // @see y/views/*

    GUI: null,       // @see y/gui.js

    App: null,       // @see y/app.js

    status: "uninitialized",  // uninitialized, loading, loaded

    /* /!\ overwrited in DEV by Y.Env in ey/env.js */
    Env: {
      DEV: "DEV",
      PROD: "PROD",
      CURRENT: null
    },

    initializingBackbone: function () {
      Backbone.$ = $;
      Backbone.ajax = function(url, options) {
          // proxy to jquery
          if (typeof url === "object") {
            options = url;
            url = undefined;
          }
          options = options || {};
          url = url || options.url;
          /*#ifdef CORS*/
          // adding cors
          options.crossDomain = true;
          /*#endif*/
          options.cache = false; // forcing jquery to add a random parameter.
          // calling jquery
          //console.log('Backbone.ajax: '+url+' '+JSON.stringify(options));
          // event system
          /*#ifdef DEV*/
          console.log('Backbone.ajax: ' + url + ' options = ' + JSON.stringify(options));
          /*#endif*/

          // slow if answer is taking longer than 2sec.
         
          // launching xhr.
          var xhr = $.ajax(url, options);
          // events.
          xhr.always($.proxy(function () { this.trigger("request.end"); }, this));
          
          this.trigger("request.start", xhr, url, options);
          return xhr;
      };
    },

    load: function (callback) {
      var that = this;

      // initializing backbone.
      this.initializingBackbone();
      // init self configuration
      this.Conf.initEnv()
               .load(this.Env.CURRENT, function onConfLoaded(err) {
                 // /!\ error handling after i18n

                 // internationalization.
                 var i18nOptions = { lng: "fr-FR", fallbackLng: "fr" };
                 that.i18nOptions = i18nOptions;
                 i18nOptions.resGetPath = '/static/locales/__lng__/translation.json';
                 i18n.init(i18nOptions, function() {
                   // FIXME: error handling; rework the loading process.
                   //  if err is "deprecated" => we stop loading.
                   //  if err is other (ex: "network connection"), we continue to load.
                   if (err == "deprecated" || err == "network error")
                     return callback(err);

                   // init router
                   that.Router.initialize();
                    /*#ifdef DEV*/
                    console.log('router initialized');
                    /*#endif*/
                   
                   // load the templates.
                   that.Templates.loadAsync(function () {
                     /*#ifdef DEV*/ 
                     console.log('template loaded');
                     /*#endif*/
                     // init GUI singleton
                     that.GUI.header = new Y.Views.Header({el: "#header"});
                     that.GUI.content = null; // will be overwrite by the router.
                     that.GUI.navbar = new Y.Views.Navbar();  // unused yet.
                     /*#ifdef DEV*/
                     console.log('backbone history start');
                     /*#endif*/
                     // start dispatching routes
                     // @see http://backbonejs.org/#History-start
                     Backbone.history.start({pushState:true});
                     // Everything is ok => updating networkg status
                     // FiXME: remplacer cet artefact de chargement par un splashscreen étendu.
                     //Y.Connection.resetStatus();
                     // appel de la callback.
                     callback();
                   });
                 });
               });
    },

    unload: function () {
      Y.Connection.unload();
    },

    // FIXME: should be initialized only when document is ready.
    // same as jquery ;)
    ready: (function () {
      var callbacks = [];

      return function ready(callback) {
        switch (this.status) {
          case "uninitialized":
            // when YesWeScore is uninitialized, we just stack the callbacks.
            callbacks.push(callback);
            // we are now "loading"
            console.log('avant status loading ');
            this.status = "loading";
            
            this.load(_.bind(function onConfLoaded(err) {
              // error handling
              if (err) {
                if (err === "deprecated") {
                  //Y.Connection.forceStatus(Y.Connection.STATUS_OFFLINE);
                  console.log("deprecated");
                  //Y.GUI.displayLayerNewVersion();
                  return; // we do not want to continue loading.
                }
                if (err === "network error")
                  console.log("network error");
                  //Y.GUI.diplayLayerNetworkError();
                  return;
              }
              // We are now ready.
              this.status = "ready";
              _(callbacks).forEach(function (f) { f() });
            }, this));
            break;
          case "loading":
            // when YesWeScore is loading, we just stack the callbacks.
            callbacks.push(callback);
            break;
          case "ready":
            // when YesWeScore is ready, call the callback !
            setTimeout(callback, 10);
            break;
          default:
            throw "error";
        }
      };
    })()
  };
  // exporting YesWeScore to global scope, aliasing it to Y.
  global.YesWeScore = YesWeScore;
  global.Y = YesWeScore;
})(this);