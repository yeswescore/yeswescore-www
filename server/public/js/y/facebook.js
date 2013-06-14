(function (Y, undefined) {
  /*#ifdef STRICT*/
  "use strict";
  /*#endif*/


  // detecter error sur le token
  // detecter error en general

  var Facebook = {
    _connecting: false,

    browser: null,

    MAX_INAPPBROWSER_PAGES: 10, // the user can browse max 5 pages inside the inappbrowser.
                               // if > 5 => we close the browser.
    nbPagesBrowsed: 0,
    
    isConnected: function () {
      var player = Y.User.getPlayer();
      return player.get('connection') &&
             player.get('connection').facebook &&
             player.get('connection').facebook.token;
    },

    // connect the user if not yet connected
    // share the message (post on its wall).
    shareAsync: function (id, message, callback) {
      assert(typeof id === "string");
      assert(typeof message === "string");
      assert(typeof callback === "function");
      
      var that = this;
      if (this.isConnected())
        return this.shareWithoutConnectionAsync(id, message, callback);
      this.connectAsync(function (err) {
        if (err)
          return callback(err);
        // now we are connected.
        that.shareWithoutConnectionAsync(id, message, callback);
      });
    },

    // share a message (post on the wall)
    // using fb graph api
    shareWithoutConnectionAsync: function (id, message, callback) {
      assert(typeof id === "string");
      assert(typeof message === "string");
      assert(typeof callback === "function");

      var player = Y.User.getPlayer();
      var fbid = player.get('connection').facebook.id;
      var fbtoken = player.get('connection').facebook.token;
      return $.ajax({
        url: "https://graph.facebook.com/" + fbid + "/feed",
        type: 'POST',
        dataType: "JSON",
        // @see: http://developers.facebook.com/docs/reference/api/publishing/
        data: {
          message: message,
          //picture: Y.Conf.get('fb.image.logo'),
          //description: message,
          target_id: fbid,
          access_token: fbtoken,
          format: "json"
        },
        success: function (data) { callback(null) },
        error: function (jqXHR, satus, error) {
          var o = JSON.tryParse(jqXHR.responseText);
          var m = (o && o.error && o.error.message) ? o.error.message : error;
          callback(m);
        }
      });
    },

    // WARNING:
    //  if the user agent is mobile, facebook doesn't allow an http redirect.
    //  so, in DEV environment
    //    if non mobile (chrome) => normal dev url
    //    if mobile              => https redirect url
    connectAsync: function (callback) {
      if (this._connecting) {
        assert(false); // we should never be here.
        return;
      }
      var that = this;
      this._connecting = true;
      // build redirect url
      var redirectUri = Y.Conf.get("fb.url.inappbrowser.redirect");
      // build facebook oauth url
      var facebookOauthUrl = Y.Conf.get("facebook.url.oauth")
                              .replace("[fb_app_id]", Y.Conf.get("facebook.app.id"))
                              .replace("[redirect_uri]", encodeURIComponent(redirectUri));
      // we might call the callback twice: 
      //  - first on success
      //  - second, when the window is closing.
      // so we create a new callback that can only be called once
      var cbAlreadyCalled = false;
      var callbackOnce = function () {
        if (!cbAlreadyCalled) {
          cbAlreadyCalled = true;
          callback.apply(null, arguments);
        }
      };

      // create a new browser (trying to be secur)
      try {
        this.browser = null;
        this.nbPagesBrowsed = 0;
        this.browser = new Cordova.InAppBrowser();
        
        
        this.browser.open({
          url: facebookOauthUrl, // Oauth facebook
          loadstart: function onloadstart(data) {
            that._onInappbrowserPageChanged(data, callback);
          },
          exit: function () {
            that._connecting = false;
            callback("exit");
          } // the use might close the browser or push back button
        });
      } catch (e) {
        if (this.browser) {
          try {
            that._connecting = false;
            callback(e);
            this.browser.close();
          } catch (e) { }
        }
        callback("inappbrowser error");
      }
    },

    // this function is triggered every time the page change in the inappbrowser
    _onInappbrowserPageChanged: function (data, callback) {
      var url = data.url;
      this.nbPagesBrowsed++;
      if (this.nbPagesBrowsed == this.MAX_INAPPBROWSER_PAGES) {
        this.browser.close();
        return callback("too many pages browsed (" + this.nbPagesBrowsed + ")");
      }
      // inappbrowser destination regex url
      // FIXME: weak regex, we should use an url parser.
      // YOUR_REDIRECT_URI#access_token=USER_ACCESS_TOKEN&expires_in=NUMBER_OF_SECONDS_UNTIL_TOKEN_EXPIRES
      var success = /.*\/v1\/inappbrowser\/redirect.html\#.*access_token\=(.+)\&.*/;
      // YOUR_REDIRECT_URI?error_reason=user_denied&error=access_denied&error_description=The+user+denied+your+request.
      var error = /.*\/v1\/inappbrowser\/redirect.html\?.*error_description\=(.+).*/;
      var successed = success.exec(url);
      if (successed && typeof successed[1] === "string") {
        var token = successed[1];
        this._onLoginSuccess(token, callback);
      } else if (error.exec(url)) {
        this._onLoginError(callback);
      } else {
        // another page has been opened.
        // FIXME: white list / number of pages
        /*
          Log:"Cordova.InAppBrowser: loadstart: https://www.facebook.com/dialog/oauth?%20client_id=618522421507840&scope=email,publish_stream,offline_access&redirect_uri=http%3A%2F%2Fplic.no-ip.org%3A9091%2Fv1%2Finappbrowser%2Fredirect.html&response_type=token"
          Log:"Cordova.InAppBrowser: loadstart: https://m.facebook.com/dialog/permissions.request?app_id=618522421507840&client_id=618522421507840&redirect_uri=http%3A%2F%2Fplic.no-ip.org%3A9091%2Fv1%2Finappbrowser%2Fredirect.html&response_type=token&perms=email%2Cpublish_stream%2Coffline_access&fbconnect=1&_path=permissions.request"
          Log:"Cordova.InAppBrowser: loadstart: http://m.facebook.com/login.php?app_id=618522421507840&skip_api_login=1&cancel=http%3A%2F%2Fplic.no-ip.org%3A9091%2Fv1%2Finappbrowser%2Fredirect.html%3Ferror_reason%3Duser_denied%26error%3Daccess_denied%26error_description%3DThe%2Buser%2Bdenied%2Byour%2Brequest.&fbconnect=1&next=https%3A%2F%2Fm.facebook.com%2Fdialog%2Fpermissions.request%3F_path%3Dpermissions.request%26app_id%3D618522421507840%26client_id%3D618522421507840%26redirect_uri%3Dhttp%253A%252F%252Fplic.no-ip.org%253A9091%252Fv1%252Finappbrowser%252Fredirect.html%26display%3Dtouch%26response_type%3Dtoken%26perms%3Demail%252Cpublish_stream%252Coffline_access%26fbconnect%3D1%26from_login%3D1&rcount=1&_rdr"
          Log:"Cordova.InAppBrowser: loadstart: https://m.facebook.com/login.php?fbconnect=1&skip_api_login=1&next=https%3A%2F%2Fm.facebook.com%2Fdialog%2Fpermissions.request%3F_path%3Dpermissions.request%26app_id%3D618522421507840%26client_id%3D618522421507840%26redirect_uri%3Dhttp%253A%252F%252Fplic.no-ip.org%253A9091%252Fv1%252Finappbrowser%252Fredirect.html%26display%3Dtouch%26response_type%3Dtoken%26perms%3Demail%252Cpublish_stream%252Coffline_access%26fbconnect%3D1%26from_login%3D1&refsrc=http%3A%2F%2Fm.facebook.com%2Flogin.php&app_id=618522421507840&cancel=http%3A%2F%2Fplic.no-ip.org%3A9091%2Fv1%2Finappbrowser%2Fredirect.html%3Ferror_reason%3Duser_denied%26error%3Daccess_denied%26error_description%3DThe%2Buser%2Bdenied%2Byour%2Brequest.&refid=9"
          Log:"Cordova.InAppBrowser: loadstart: https://m.facebook.com/dialog/permissions.request?_path=permissions.request&app_id=618522421507840&client_id=618522421507840&redirect_uri=http%3A%2F%2Fplic.no-ip.org%3A9091%2Fv1%2Finappbrowser%2Fredirect.html&display=touch&response_type=token&perms=email%2Cpublish_stream%2Coffline_access&fbconnect=1&from_login=1&refid=9&_rdr"
          Log:"Cordova.InAppBrowser: loadstart: http://plic.no-ip.org:9091/v1/inappbrowser/redirect.html#access_token=BAAIyivk4NwABABRdJzmQZCRCMIJvPFiOofFyXyrZCCZBeaFTnic79wjySHPc6qP7SogUpZAkIUWNaZBdLnSNaeo7SycQeCK0TMdfAXyGmlteDpUYe5hFjSMuo5xsTYMbrX5DSQm3ELUk2CMcxUKeVXvZBlyDR5kAVc0nPDn8ZAZBOWido1nievZCayooEBCi7HNwImQ2ag7sYdUBg8sEHysSLCb3EPXQd4aASjUAa14ZB3dgZDZD&expires_in=5147662"
        */
        // FIXME: restreindre à .*\:\/\/.*facebook\.com\/
        //    et à plic.no-ip (fb.yeswescore)...
      }
    },

    _onLoginSuccess: function (token, callback) {
      var that = this;
      var player = Y.User.getPlayer();
      var playerId = player.get('id');
      var playerToken = player.get('token');
      
      /*#ifdef DEV*/
      console.log("fb playerid:"+playerId+" playertoken:"+playerToken+" token:"+token);
      /*#endif*/
      
      //
      Backbone.ajax({
        dataType : 'json',
        url : Y.Conf.get("api.url.facebook.login"),
        type : 'GET',
        data : { playerid: playerId, token: playerToken, access_token: token }
      }).done(function (data) {
          if (data &&
              data.id == playerId && data.token == playerToken &&
              data.connection && data.connection.facebook &&
              data.connection.facebook.token) {
            // update du player
            Y.User.updatePlayer(data);
            return callback(); // success
          }
          callback("api json error");
      }).fail(function () {
        callback("api error");
      }).always(function () {
        that._connecting = false;
        that.browser.close();
      });
    },

    _onLoginError: function (callback) {
      this._connecting = false;
      this.browser.close();
      callback("fb error");
    }
  };

  Y.Facebook = Facebook;
})(Y);
