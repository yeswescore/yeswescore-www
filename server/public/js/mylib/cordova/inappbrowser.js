 (function (Cordova, undefined) {
  /*#ifdef STRICT*/
  "use strict";
  /*#endif*/

  /**
  * In App Browser Api
  * 
  * // simple use
  * var browser = new Cordova.InAppBrowser();
  * browser.open('http://facebook.com/oauth/?foo=bar');
  * // close the browser
  * browser.close();
  *
  * // advanced use
  * var iab = new Cordova.InAppBrowser();
  * iab.open({
  *   url: 'http://facebook.com/oauth/?foo=bar'
  *   loadstart: function (e) { console.log('browsing ' + e.url); },
  *   loadend: function (e) { console.log('loadend ' + e.url); },
  *   exit: function (e) { console.log('browsing finished'); }
  * });
  * 
  */
  var InAppBrowser = function () {
    this.iabRef = null;
    /*#ifdef WEB*/
    this.poolingIntervalId = null;
    /*#endif*/
  };

  InAppBrowser.prototype.open = function (options) {
    if (typeof options === "string")
      options = { url: options };
    if (!options || !options.url)
      throw "missing options.url";
    //
    try {
      this.iabRef = window.open(options.url, "_blank", "location=no");

      /*#ifdef WEB*/
      // In dev environment, we cannot access to the child window to monitor the url, so ...
      //  we use postMessage to trigger a message to the window, and the window give us back the Hash.
      //
      // This is greatly unsecure :D
      // 
      // The child window need to implement :
      //
      // <script type="text/javascript">window.addEventListener('message', function pong(e) { e.source.postMessage(document.location.href, e.origin); }, false)</script>
      //
      // There surely be a cleaner / safer way of doing this...
      //
      // For more informations,
      // @see http://developer.apple.com/library/safari/#documentation/appleapplications/Conceptual/SafariJSProgTopics/Articles/Cross-documentmessaging.html
      var that = this;
      if (typeof options.loadstart === "function" ||
          typeof options.loadstop === "function") {
        this.poolingIntervalId = setInterval(function ping() {
          that.iabRef.postMessage("ping", "*");
        }, 1000);

        window.addEventListener('message', function (e) {
          clearInterval(that.poolingIntervalId);
          that.poolingIntervalId = null;
          //
          if (typeof options.loadstart === "function")
            options.loadstart({url: e.data});
          if (typeof options.loadstop === "function")
            options.loadstop({url: e.data});
        }, false);
      }
      /*#endif*/

      if (typeof options.loadstart === "function")
        this.iabRef.addEventListener('loadstart', function (data) {
          /*#ifdef DEV*/
          console.log('Cordova.InAppBrowser: loadstart: ' + data.url);
          /*#endif*/
          options.loadstart.apply(this, arguments);
        });
      if (typeof options.loadstop === "function")
        this.iabRef.addEventListener('loadstop', options.loadstop);
      if (typeof options.exit === "function")
        this.iabRef.addEventListener('exit', options.exit);
    } catch (e) {
      console.log('InAppBrowser erreur ' + e);
    }
  };

  InAppBrowser.prototype.close = function () {
    if (this.iabRef) {
      this.iabRef.close();
      this.iabRef = null;
    }
    if (this.poolingIntervalId) {
      clearTimeout(this.poolingIntervalId);
      this.poolingIntervalId = null;
    }
  };

  // registering geolocalisation only when cordova is ready.
  Cordova.deviceready(function () {
    Cordova.InAppBrowser = InAppBrowser;
    console.log("InAppBrowser ready");
  });
})(Cordova);
