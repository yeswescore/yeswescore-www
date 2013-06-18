(function (Y, undefined) {
  /*#ifdef STRICT*/
  "use strict";
  /*#endif*/

  // permanent storage
  var filename = "yws.json";

  var DB = new Y.DB("Y.Conf.");

  var Conf = {
    initEnv: function () {
      Y.Env.CURRENT = Y.Env.PROD; // default behaviour
      /*#ifdef DEV*/
      Y.Env.CURRENT = Y.Env.DEV;  // overloaded in dev
      /*#endif*/
      return this; // chainable
    },

    // Processus de chargement 
    //  - si clefs de conf pas encore en cache => chargement
    //  - appel au bootstrap.
    load: function (env, callback) {
      assert(env === Y.Env.DEV ||
             env === Y.Env.PROD);

      // this function will be executed when keys (temporary & permanent) are loaded.
      var onKeysLoaded = _.bind(function (err) {
        // error handling.
        if (err)
          return callback(err);
        // une fois les clefs chargées, on appelle le bootstrap.
        this.loadBootstrap(function (err) {
          if (err)
            return callback(err); // might be a "network error" or "deprecated"
          callback();
        });
      }, this);

      // conf not loaded => we load temporary keys & permanent keys
      if (this.get("_env") !== env ||
          this.get('version') !== Y.App.VERSION)
      {
        // loading default keys (temporary)
        // Parametrage des variables dependantes d'un environnement
        Y.Env.user = "vincent";
        
        switch (env) {
          case Y.Env.DEV:
            /*#ifdef DEV*/
            switch (Y.Env.user) {
              case "marc":
                var apiBaseUrl = "http://plic.no-ip.org:22222";
                var fbBaseUrl = "https://fb.yeswescore.com";
                var fbAppId = "618522421507840";
                break;
              case "vincent":
                var apiBaseUrl = "http://plic.no-ip.org:1024";
                var fbBaseUrl = "https://fb.yeswescore.com";
                var fbAppId = "408897482525651";
                break;
              case "alpha":
              default:
                var apiBaseUrl = "http://plic.no-ip.org:20080";
                var fbBaseUrl = "https://fb.yeswescore.com";
                var fbAppId = "FIXME";
                break;
            }

            this.set("api.url.auth", apiBaseUrl + "/v2/auth/");
            this.set("api.url.auth.registered", apiBaseUrl + "/v2/auth/registered/");            
            this.set("api.url.bootstrap", apiBaseUrl + "/bootstrap/conf.json?version=%VERSION%");
            this.set("api.url.facebook.login", apiBaseUrl + "/v2/facebook/login/");
            this.set("api.url.games", apiBaseUrl + "/v2/games/");
            this.set("api.url.players", apiBaseUrl + "/v2/players/");
            this.set("api.url.clubs", apiBaseUrl + "/v2/clubs/");
            this.set("api.url.stats", apiBaseUrl + "/v2/stats/");
            this.set("api.url.reports", apiBaseUrl + "/v2/report/");
            this.set("api.url.reports.games", apiBaseUrl + "/v2/report/games/");
            this.set("api.url.reports.players", apiBaseUrl + "/v2/report/players/");
            this.set("api.url.reports.clubs", apiBaseUrl + "/v2/report/clubs/");
            this.set("api.url.autocomplete.players", apiBaseUrl + "/v2/players/autocomplete/");
            this.set("api.url.autocomplete.clubs", apiBaseUrl + "/v2/clubs/autocomplete/");          
            this.set("fb.url.inappbrowser.redirect", fbBaseUrl + "/v2/inappbrowser/redirect.html");
            this.set("facebook.app.id", fbAppId);
            this.set("facebook.url.oauth", "https://www.facebook.com/dialog/oauth?client_id=[fb_app_id]&scope=email,publish_stream,offline_access&redirect_uri=[redirect_uri]&response_type=token");
            /*#endif*/
            break;
          case Y.Env.PROD:
            this.set("api.url.auth", "http://api.yeswescore.com/v2/auth/");
            this.set("api.url.auth.registered", "http://api.yeswescore.com/v2/auth/registered/");            
            this.set("api.url.bootstrap", "http://api.yeswescore.com/bootstrap/conf.json?version=%VERSION%");
            this.set("api.url.facebook.login", "http://api.yeswescore.com/v2/facebook/login/");
            this.set("api.url.games", "http://api.yeswescore.com/v2/games/");
            this.set("api.url.players", "http://api.yeswescore.com/v2/players/");
            this.set("api.url.clubs", "http://api.yeswescore.com/v2/clubs/");
            this.set("api.url.stats", "http://api.yeswescore.com/v2/stats/");
            this.set("api.url.reports", "http://api.yeswescore.com/v2/report/");
            this.set("api.url.reports.games", "http://api.yeswescore.com/v2/report/games/");
            this.set("api.url.reports.players", "http://api.yeswescore.com/v2/report/players/");
            this.set("api.url.reports.clubs", "http://api.yeswescore.com/v2/report/clubs/");
            this.set("api.url.autocomplete.players", "http://api.yeswescore.com/v2/players/autocomplete/");
            this.set("api.url.autocomplete.clubs", "http://api.yeswescore.com/v2/clubs/autocomplete/");
            this.set("fb.url.inappbrowser.redirect", "https://fb.yeswescore.com/v2/inappbrowser/redirect.html");
            this.set("facebook.app.id", "447718828610668");
            this.set("facebook.url.oauth", "https://www.facebook.com/dialog/oauth?client_id=[fb_app_id]&scope=email,publish_stream,offline_access&redirect_uri=[redirect_uri]&response_type=token");
            break;
          default:
            break;
        }

        // Parametrage des variables non dependantes d'un environnement
        this.set("game.refresh", 10000);        // default 30000 (30sec) //test 10s
        this.set("games.refresh", 20000);        // default 30000 (30sec) //test 30s        
        this.set("game.max.comments", 20); 
        this.set("pooling.geolocation", 10000); // default 10000 (10sec)
        this.set("pooling.connection", 1000);   // default 1000  ( 1sec)
        this.set("version", Y.App.VERSION); // will be usefull on update.
        this.set("_env", env);

        // loading permanent keys
        //  stored inside yws.json using format [{key:...,value:...,metadata:...},...]
        /*
        Cordova.ready(function () {
          Cordova.File.read(filename, function (err, data) {
            if (err)
              return onKeysLoaded(err); // FIXME
            var k = [];
            try { k = JSON.parse(data); } catch (e) { }
            _.forEach(k, function (o) {
              var obj = { key: o.key, value: o.value, metadata: o.metadata };
              DB.saveJSON(key, obj);
            });
            onKeysLoaded();
          });
        });
        */
        
      } else {
        // keys are already loaded (by previous session)
        // FIXME: normaly, we don't need cordova to be ready to say the configuration
        //        is ready, but there might be errors if we don't do this, no ?
        /*
        Cordova.ready(function () {
          onKeysLoaded();
        });
        */
      }
      
      onKeysLoaded();
      
    },


    // FIXME: might be in an "app" class ?
    loadBootstrap: function (callback) {
      // on ecrase avec les changements et on change les versions
      // variable qui oblige à mettre à jour -> objet connnection toujours offline
      Backbone.ajax({
        type: 'GET',
        url: this.get('api.url.bootstrap').replace("%VERSION%", Y.App.VERSION),
        success: function (infos) { 
          var deprecated = false;
          infos.forEach(function (info) {      
            if (info.key.indexOf("app.deprecated") !== -1) {
            	//console.log('on detecte app deprecated');
            	if (info.value === true) {
            		//console.log('Il faut mettre à jour l\'apps');
                deprecated = true;
            	}
            } else {
            	Y.Conf.set(info.key, info.value);  
            }   	
          });
          if (deprecated)
            return callback("deprecated"); // deprecated app is considered as an error.
          return callback(); // everything was ok.
        },
        error: function (err) {
          //console.log('err Connection', err);
          //Y.Connection.setOffline(); // usefull ?
          return callback("network error");
        },
        dataType: "JSON"
      });
    },

    // Read API
    // @param string/regExp key
    // @return [values]/value/undefined
    get: function (key) {
      assert(typeof key === "string" || key instanceof RegExp);

      if (typeof key === "string") {
        var value = DB.readJSON(key);
        if (value)
          return value.value;
        return undefined;
      }
      // recursive call.
      return _.map(this.keys(key), function (key) {
        return this.get(key);
      }, this);
    },


    // Del API
    // @param string/regExp key
    // @return [values]/value/undefined
    del: function (key) {
      assert(typeof key === "string" || key instanceof RegExp);

      if (typeof key === "string") {
        return DB.remove(key);
      }

    },

    // @param string key
    // @return object/undefined
    getMetadata: function (key) {
      assert(typeof key === "string");

      var value = DB.readJSON(key);
      if (value)
        return value.metadata;
      return undefined;
    },

    // @param string key
    // @return object/undefined
    getRaw: function (key) {
      assert(typeof key === "string");

      return DB.readJSON(key);
    },

    // Write API (inspired by http://redis.io)
    set: function (key, value, metadata, callback) {
      assert(typeof key === "string");
      assert(typeof value !== "undefined");

      var obj = { key: key, value: value, metadata: metadata };
      DB.saveJSON(key, obj);

      // events
      this.trigger("set", obj);

      // permanent keys (cost a lot).
      if (metadata && metadata.permanent) {
        var permanentKeys = _.filter(DB.getKeys(), function (k) {
          var metadata = this.getMetadata(k);
          return metadata && metadata.permanent;
        }, this);
        var permanentObjs = _.map(permanentKeys, function (k) {
          return this.getRaw(k);
        }, this);
        // saving when cordova is ready.
        //Cordova.ready(function () {
        //  Cordova.File.write(filename, JSON.stringify(permanentObjs), callback || function () { });
        //});
      }
    },

    // set if not exist.
    setNX: function (key, value, metadata) {
      assert(typeof key === "string");

      if (!this.exist(key))
        this.set(key, value, metadata);
    },

    // search configuration keys.
    keys: function (r) {
      assert(r instanceof RegExp);

      return _.filter(DB.getKeys(), function (key) {
        return key.match(r);
      });
    },

    exist: function (key) {
      assert(typeof key === "string");

      return DB.read(key) !== null;
    },

    unload: function () {
      _.forEach(DB.getKeys(), function (key) {
        DB.remove(key);
      });
    },

    reload: function () {
      this.unload();
      this.load();
    }
  };

  // using mixin
  _.extend(Conf, Backbone.Events);

  // setting conf
  Y.Conf = Conf;
})(Y);

