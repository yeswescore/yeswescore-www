(function (Y, undefined) {
  /*#ifdef STRICT*/
  "use strict";
  /*#endif*/

  // DB Storage drivers :
  //  - localStorage (if possible)
  //  - peacefull degradation to javascript storage engine.
  var Drivers = {
    localStorage: {
      isUsable: function () {
        try {
          window.localStorage.setItem("__wtf", "31337");
          if (window.localStorage.getItem("__wtf") !== "31337")
            return false;
          window.localStorage.removeItem("__wtf");
          return true;
        } catch (e) { return false; }
      },
      setItem: function (k, v) { return window.localStorage.setItem(k, v); },
      getItem: function (k) { return window.localStorage.getItem(k); },
      removeItem: function (k) { return window.localStorage.removeItem(k); },
      getKeys: function () { return _.keys(window.localStorage); }
    },
    javascript: {
      isUsable: function () { return true; },
      data : {},
      setItem: function (k, v) { this.data[k] = v; return; },
      getItem: function (k) { if (typeof this.data[k] === "undefined") return null; return this.data[k]; },
      removeItem: function (k) { delete this.data[k]; return; },
      getKeys: function () { return _.keys(this.data); }
    }
  };

  // loading default driver.
  var defaultDriver = null;
  _.forEach(Drivers, function (driver, driverName) {
    if (!defaultDriver && driver.isUsable()) {
      defaultDriver = driver;
      /*#ifdef DEV*/
      console.log("USING driver : " + driverName);
      /*#endif*/
    }
  });

  // DB: no need of any drivers
  //  localStorage is supported on android / iOS
  //  @see http://caniuse.com/#feat=namevalue-storage
  //
  // But, IE10 + weinre => localStorage messup => drivers.
  //
  // FIXME: utiliser une surcouche au localstorage qui gère le quota et 
  //    une notion de date et priorité (#44910971)
  var DB = function (prefix, driver) {
    // in local storage, all conf keys will be prefixed "prefix"
    this.prefix = prefix || "";
    this.driver = driver || defaultDriver;
  };

  DB.prototype.save = function (k, v) {
    assert(typeof k === "string");
    assert(typeof v === "string");

    this.driver.setItem(this.prefix + k, v);
  };

  // @return value/null if not exist.
  DB.prototype.read = function (k) {
    assert(typeof k === "string");

    return this.driver.getItem(this.prefix + k);
  };

  DB.prototype.remove = function (k) {
    assert(typeof k === "string");

    return this.driver.removeItem(k);
  };

  // 
  DB.prototype.saveJSON = function (k, v) {
    assert(typeof k === "string");
    assert(typeof v !== undefined);

    this.save(k, JSON.stringify(v));
  };

  // @return value or undefined if not exist/errors.
  DB.prototype.readJSON = function (k) {
    var v = this.read(k);
    if (v === null)
      return undefined;
    return JSON.tryParse(v);
  };

  DB.prototype.getKeys = function () {
    return _.filter(this.driver.getKeys(), function (k) {
      return k.substr(0, this.prefix.length) == this.prefix;
    }, this);
  };

  // setting conf
  Y.DB = DB;
})(Y);
