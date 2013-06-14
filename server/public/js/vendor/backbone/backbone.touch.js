//     Backbone.touch.js 0.2

//     (c) 2012 Raymond Julin, Keyteq AS
//     Backbone.touch may be freely distributed under the MIT license.
;(function (factory) {

    "use strict";

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['underscore', 'backbone'], factory);
    } else {
        // Browser globals
        factory(_, Backbone);
    }
}(function (_, Backbone) {

    "use strict";

    var delegateEventSplitter = /^(\S+)\s*(.*)$/;

    _.extend(Backbone.View.prototype, {
        _touching : false,

        touchPrevents : true,

        isTouch : ('ontouchstart' in document && !('callPhantom' in window)) ||
                  window.navigator.msPointerEnabled,

        // Drop in replacement for Backbone.View#delegateEvent
        // Enables better touch support
        // 
        // If the users device is touch enabled it replace any `click`
        // event with listening for touch(start|move|end) in order to
        // quickly trigger touch taps
        delegateEvents: function(events) {
          if (!(events || (events = _.result(this, 'events')))) return this;
          this.undelegateEvents();
          for (var key in events) {
            var method = events[key];
            if (!_.isFunction(method)) method = this[events[key]];
            if (!method) continue;
            var match = key.match(delegateEventSplitter);
            var eventName = match[1], selector = match[2];
            method = _.bind(method, this);

            // begin hack
            var that = this;
            var boundHandler = (function (method) {
              return function (e) {
                that._touchHandler(e, {method:method});
              };
            })(method);
            if (this.isTouch && eventName === 'vclick') {
              if (window.navigator.msPointerEnabled) {
                  this.$el.on('MSPointerDown', selector, boundHandler);
                  this.$el.on('MSPointerUp', selector, boundHandler);
              }
              this.$el.on('touchstart', selector, boundHandler);
              this.$el.on('touchend', selector, boundHandler);
            } else {
              eventName = (eventName === 'vclick') ? 'click' : eventName;
              // backbone code.
              eventName += '.delegateEvents' + this.cid;
              if (selector === '') {
                this.$el.on(eventName, method);
              } else {
                this.$el.on(eventName, selector, method);
              }

            }
          }
          return this;
        },

        // At the first touchstart we register touchevents as ongoing
        // and as soon as a touch move happens we set touching to false,
        // thus implying that a fastclick will not happen when
        // touchend occurs. If no touchmove happened
        // inbetween touchstart and touchend we trigger the event
        //
        // The `touchPrevents` toggle decides if Backbone.touch
        // will stop propagation and prevent default
        // for *button* and *a* elements
        _touchHandler : function(e, data) {
            if (window.navigator.msPointerEnabled) { // ie10.
            console.log(e.type);
                switch (e.type) {
                    case 'MSPointerUp':
                        if (this.touchPrevents) {
                            var tagName = e.currentTarget.tagName;
                            if (tagName === 'BUTTON' ||
                                tagName === 'A') {
                                e.preventDefault();
                                e.stopPropagation();
                            }
                        }
                        data.method(e);
                        break;
                }
                return;
            }
            if (!('changedTouches' in e.originalEvent)) return;
            var touch = e.originalEvent.changedTouches[0];
            var x = touch.clientX;
            var y = touch.clientY;
            switch (e.type) {
                case 'touchstart':
                    this._touching = [x, y];
                    break;
                case 'touchend':
                    var oldX = this._touching[0];
                    var oldY = this._touching[1];
                    var threshold = 10;
                    if (x < (oldX + threshold) && x > (oldX - threshold) &&
                        y < (oldY + threshold) && y > (oldY - threshold)) {
                        this._touching = false;
                        if (this.touchPrevents) {
                            var tagName = e.currentTarget.tagName;
                            if (tagName === 'BUTTON' ||
                                tagName === 'A') {
                                e.preventDefault();
                                e.stopPropagation();
                            }
                        }
                        data.method(e);
                    }
                    break;
            }
        }
    });
    return Backbone;
}));
