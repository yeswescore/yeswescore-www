(function (Y, undefined) {
  /*#ifdef STRICT*/
  "use strict";
  /*#endif*/

  var Geolocation = {
    longitude: 4.879303,
    latitude: 45.732307,

    update: (function () {
      var pooling = false; // avoiding pooling twice

      return function () {
        if (Cordova.status !== "ready" || pooling)
          return;
        pooling = true;
        // FIXME: treshold on "change" event ?
        Cordova.Geolocation.getCurrentPosition(function (coords) {
          if (coords &&
              (Y.Geolocation.longitude !== coords.longitude ||
               Y.Geolocation.latitude !== coords.latitude)) {
            Y.Geolocation.longitude = coords.longitude;
            Y.Geolocation.latitude = coords.latitude;
            Y.Geolocation.trigger("change", [Y.Geolocation.longitude, Y.Geolocation.latitude]);
          }
          pooling = false;
        });
      };
    })()
  };

  // adding some mixin for events.
  _.extend(Geolocation, Backbone.Events);

  // pooling cordova to auto-update geoloc coordinates
  setInterval(function () { Geolocation.update(); }, Y.Conf.get("pooling.geolocation"));

  // exporting to global scope
  Y.Geolocation = Geolocation;
})(Y);
