(function (Y, undefined) {
  /*#ifdef STRICT*/
  "use strict";
  /*#endif*/

  var GUI = {
    header: null,       // singleton view #header
    content: null,      // singleton current view (center)
    autocomplete: null, // singleton view #autocomplete
    navbar: null,       // singleton view #navbar
    inputMode: function (status) {
      if (window.isMobileBrowser()) { // only on mobile browser
        var $body = $("body");
        if (status) {
          $body.addClass("inputmodeon");
          $body.removeClass("inputmodeoff");
        } else {
          $body.removeClass("inputmodeon");
          $body.addClass("inputmodeoff");
        }
      }
      return true;
    },

    // display an overlay asking the user to upgrade
    // FIXME: HTML should be in the .html / or in index.html
    displayLayerNewVersion: function () {
      // we are in a dead end, unloading Y
      Y.unload();
      $('body').html(i18n.t('bootstrap.updateRequired'));
      $('body').removeClass();
      $('body').addClass('update'); // we don't need the overlay.
    },

    diplayLayerNetworkError: function () {
      // we are in a dead end, unloading Y
      Y.unload();
      $('body').html(i18n.t('bootstrap.errortext') + '<div class="button retry" onclick="window.location.reload();">' + i18n.t('bootstrap.errorbutton') + '</div>');
      $('body').removeClass();
      $('body').addClass('update');
    }
  };



  Y.GUI = GUI;
})(Y);