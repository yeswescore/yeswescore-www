(function (Y, undefined) {
  /*#ifdef STRICT*/
  "use strict";
  /*#endif*/

  /*
   * /!\ /!\ /!\
   *  dev only
   * /!\ /!\ /!\
   */
  var Env = {
    DEV: "DEV",
    PROD: "PROD",
    CURRENT: null
  };
  Env.user = "vincent";
  // Env.user = "vincent";
  // Env.user = "alpha";
  Y.Env = Env;
})(Y);