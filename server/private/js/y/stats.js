(function (Y, undefined) {
  /*#ifdef STRICT*/
  "use strict";
  /*#endif*/

  /*
  * Api:
  *  Y.Stats.click(ev, 'button:les_plus');
  *  Y.Stats.page(from, to);
  *
  * Stats format example:
  *  "1361549744511","
  *
  */
  var stack = [ /* String */]; // "timestamp","playerid","type","..."

  var playerIdConfKey = 'player.id';
  var playerid = "";

  var Stats = {
    TYPE: {
      STARTUP: "STARTUP",
      CORDOVA: "CORDOVA",
      CLICK: "CLICK",
      PAGE: "PAGE"
    },

    initialize: function () {
      playerid = Y.Conf.get(playerIdConfKey) || "";
      Y.Conf.on("set", function (o) {
        console.log('key setted ' + o.key + ' ' + o.value);
        if (o.key === playerIdConfKey) {
          playerid = o.value;
        }
      });
    },

    startup: function () {
      var msg = [this.TYPE.STARTUP];
      msg.push(navigator.language);
      msg.push(navigator.platform);
      msg.push(navigator.appName);
      msg.push(navigator.appVersion);
      msg.push(navigator.vendor);
      msg.push(window.innerWidth);
      msg.push(window.innerHeight);
      msg.push(window.devicePixelRatio);
      this.send(msg);
    },

    cordova: function () {
      if (typeof device !== "undefined") {
        var msg = [this.TYPE.CORDOVA];
        msg.push(device.name);
        msg.push(device.cordova);
        msg.push(device.platform);
        msg.push(device.uuid);
        msg.push(device.model);
        msg.push(device.version);
        this.send(msg);
      }
    },

    clic: function (ev, data) {
      assert(typeof ev === "object");
      assert(_.isArray(data));

      var msg = [this.TYPE.CLICK];
      // compute mouse position
      var posx = 0;
      var posy = 0;
      if (!e) var e = window.event;
      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      }
      else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft
			    + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop
			    + document.documentElement.scrollTop;
      }
      msg.push(posx);
      msg.push(posy);
      // concat with the info
      msg = msg.concat(data);
      // send
      this.send(msg);
    },

    page: function (from, to) {
      var msg = [this.TYPE.PAGE];
      msg.push(from);
      msg.push(to);
      this.send(msg);
    },

    // push a message to send
    // @param msg Array  [type,arg2,arg3]
    push: function (msg) {
      assert(_.isArray(msg));
      assert(msg.length > 1);

      // add timestamp & playerid in front of the msg
      msg.unshift(playerid);
      msg.unshift(new Date().getTime());
      // push on stack.
      stack.push(_.reduce(msg, function (result, entry) {
        return result + ((result) ? "," : "") + JSON.stringify(String(entry || ""));
      }, ""));
    },

    trySend: (function () {
      var sending = false; // semaphore
      return function () {
        if (stack.length == 0 || sending)
          return;
        sending = true;
        var msg = stack.shift(); // fifo.
        Backbone.ajax({
          url: Y.Conf.get("api.url.stats") + "?q=" + encodeURIComponent(msg),
          type: 'GET',
          dataType: 'html',
          success: function () {
            // everything went ok, next stat in 1 sec.
            setTimeout(function () {
              sending = false;
              Y.Stats.trySend();
            }, 1000);
          },
          error: function (xhrStatus, textStatus, errorThrown) {
            // retry after 5 sec.
            setTimeout(function () {
              // msg again in the stack
              stack.unshift(msg);
              sending = false;
              Y.Stats.trySend();
            }, 20000);
          }
        });
      }
    })(),

    send: function (msg) {
      this.push(msg);
      this.trySend();
    }
  };

  // initializing
  Stats.initialize();

  // starting stats.
  Cordova.ready(function () {
    /*#ifdef DEV*/
    return;
    /*#endif*/
    Stats.startup();
    Stats.cordova();
  });

  // export to global namespace
  Y.Stats = Stats;
})(Y);