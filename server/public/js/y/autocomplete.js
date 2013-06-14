(function (Y, undefined) {
  /*#ifdef STRICT*/
  "use strict";
  /*#endif*/

  /*
   * api:
   *  var autocomplete = new Y.Autocomplete(options);
   *  autocomplete.trigger("input", data); // ex: trigger on keyup
   *  autocomplete.on("input.temporized", function (input) {
   *     // doing stuff here to get data for the input
   *     autocomplete.trigger("fetched.result", [{"text": "playerA"}, {"text": "playerB"}]);
   *     // or if they were an error
   *     autocomplete.trigger("fetched.error", error);
   *  };
   *  autocomplete.on("selected", function (entry) { 
   *    // the user has selected <entry>
   *  });
   *  autocomplete.dispose();
   *
   */
  var Autocomplete = function (options) {
    // parsing options
    var defaults = { temporization: 400 };
    this.options = _.extend({}, defaults, options || {});
    // private
    this._timeout = null;
    this._fetching = false;
    this._nextInput = null;
    // public
    this.proposals = [/* { text: "..." } */];
    // mapping events to methods.
    this.on("input", this.temporizeInputs, this);
    this.on("fetched.result", this.onFetchedResult, this);
    this.on("fetched.error", this.onFetchedError, this);
  };

  _.extend(Autocomplete.prototype, Backbone.Events, {
    // several input can be received in a short time (user pressing keys)
    // we only want to trigger the autocomplete fetch on the last one.
    temporizeInputs : function (input) {
      assert(typeof input === "string");

      // we prevent doing hits for any input received, this is temporization
      if (this._timeout) {
        // by clearing this._timeout, we are dropping some previous fetch.
        window.clearTimeout(this._timeout);
        this._timeout = null;
      }
      this._timeout = window.setTimeout(_.bind(function () {
        this.triggerInput(input);
      }, this), this.options.temporization);
    },

    // we might emit input faster than fetch can handle them.
    // we do not want to flood the server
    //  so we buffer inputs, & only emit them when fetch is received.
    triggerInput: function (input) {
      if (this._fetching) {
        this._nextInput = input; // saving input
        return;
      }
      this._fetching = true;
      this.trigger("input.temporized", input);
    },

    onFetchedResult: function (data) {
      assert(_.isArray(data));

      this._fetching = false;
      //
      this.proposals = data;
      this.repaint();
      //
      if (this._nextInput) {
        var input = this._nextInput;
        this._nextInput = null;
        this.triggerInput(input);
      }
    },

    onFetchedError: function () {
      this._fetching = false;
      //
      this.proposals = [];
      this.repaint();
      //
      if (this._nextInput) {
        var input = this._nextInput;
        this._nextInput = null;
        this.triggerInput(input);
      }
    },

    repaint : function () {
      Y.GUI.autocomplete.setProposals(this, this.proposals);
    },

    fetch : function (data) { return [ { text: data } ]; }, // default is echo request.

    dispose : function () {
      // events
      this.off();
      // repainting GUI with no proposals
      Y.GUI.autocomplete.setProposals(this, []);
      Y.GUI.autocomplete.autocomplete = null; // removing ref (Hacky Hacky)
      // temporization
      if (this._timeout) {
        window.clearTimeout(this._timeout);
        this._timeout = null;
      }
    }
  });

  // adding some mixin for events.
  _.extend(Autocomplete.prototype, Backbone.Events);

  Y.Autocomplete = Autocomplete;
})(Y);