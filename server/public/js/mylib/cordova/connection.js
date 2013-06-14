(function (Cordova, undefined) {
  /*#ifdef STRICT*/
  "use strict";
  /*#endif*/

  var Connection = {
    types: {
      UNKNOWN: null,
      ETHERNET: null,
      WIFI: null,
      CELL_2G: null,
      CELL_3G: null,
      CELL_4G: null,
      NONE: null
    },

    initialize: function () {
      this.types.UNKNOWN = Connection.UNKNOWN || "UNKNOWN";
      this.types.ETHERNET = Connection.ETHERNET || "ETHERNET";
      this.types.WIFI = Connection.WIFI || "WIFI";
      this.types.CELL_2G = Connection.CELL_2G || "CELL_2G";
      this.types.CELL_3G = Connection.CELL_3G || "CELL_3G";
      this.types.CELL_4G = Connection.CELL_4G || "CELL_4G";
      this.types.NONE = Connection.NONE || "NONE";
    },

    getType: function () {
      if (navigator.connection !== undefined)
        return navigator.connection.type;
      return this.types.UNKNOWN; // inside the browser...
    },

    isOnline: function () {
      switch (this.getType().toLowerCase()) {
        case this.types.UNKNOWN.toLowerCase(): // unknown <=> offline ?
        case this.types.NONE.toLowerCase():
          return false;
        default:
          return true;
      }
    },

    isFast: function () {
      switch (this.getType().toLowerCase()) {
        case this.types.ETHERNET.toLowerCase():
        case this.types.WIFI.toLowerCase():
        case this.types.CELL_4G.toLowerCase():
          return true;
        default:
          return false;
      }
    }
  };

  Cordova.deviceready(function () {
    Connection.initialize();
    Cordova.Connection = Connection;
  });
})(Cordova);