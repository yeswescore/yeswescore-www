// Global Object
(function (global) {
  /*#ifdef STRICT*/
  "use strict";
  /*#endif*/

  var ondevicereadyCallbacks = []
    , onreadyCallbacks = [];

  var Cordova = {
    Geoloc: null,  // null until ready.

    status: "uninitialized", // uninitialized, loading, ready

    initialize: function () {
      // allready loaded.
      if (this.status !== "uninitialized")
        return;
      // we are now "loading"
      var that = this;
      this.status = "loading";
      var onDeviceReady = function () {
      
        // we are now "ready"
        that.status = "ready";
        // first => oninitialized
        _(ondevicereadyCallbacks).forEach(function (f) { f() });
        // second => onready
        _(onreadyCallbacks).forEach(function (f) { f() });
      };

      window.addEventListener("load", function () {
        document.addEventListener("deviceready", onDeviceReady, false);
      }, false);
    },

    deviceready: function (callback) {
      switch (this.status) {
        case "uninitialized":
          // when Cordova is uninitialized, we just stack the callbacks.
          ondevicereadyCallbacks.push(callback);
          break;
        case "loading":
          // when Cordova is loading, we just stack the callbacks.
          ondevicereadyCallbacks.push(callback);
          break;
        case "ready":
          // when Cordova is ready, call the callback !
          setTimeout(callback, 10);
          break;
        default:
          throw "error - unknown status (1) "+this.status;
      }
    },

    // same as jquery ;)
    ready: function ready(callback) {
      switch (this.status) {
        case "uninitialized":
          // when Cordova is uninitialized, we just stack the callbacks.
          onreadyCallbacks.push(callback);
          break;
        case "loading":
          // when Cordova is loading, we just stack the callbacks.
          onreadyCallbacks.push(callback);
          break;
        case "ready":
          // when Cordova is ready, call the callback !
          setTimeout(callback, 10);
          break;
        default:
          throw "error - unknown status (2) "+this.status;
      }
    }
  };

  // initializing on launch. (before exporting to global namespace).
  Cordova.initialize();

  // exporting Cordova to global scope
  global.Cordova = Cordova;
})(this);