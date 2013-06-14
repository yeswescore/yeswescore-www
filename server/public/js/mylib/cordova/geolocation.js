(function (Cordova, undefined) {
  /*#ifdef STRICT*/
  "use strict";
  /*#endif*/

  // wrapper around cordova geolocation
  var Geolocation = {
    getCurrentPosition: function (callback) {
      navigator.geolocation.getCurrentPosition(
        function Cordova_Geolocation_Success(position) {
          if (position && position.coords)
            callback(position.coords)
          else
            callback(null);
        },
        function Cordova_Geolocation_Error() {
          callback(null);
        }
      );
    }
  };

  // registering geolocalisation only when cordova is ready.
  Cordova.deviceready(function () {
    Cordova.Geolocation = Geolocation;
  });
})(Cordova);