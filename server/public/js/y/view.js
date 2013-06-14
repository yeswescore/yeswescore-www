(function (Y, undefined) {
  /*#ifdef STRICT*/
  "use strict";
  /*#endif*/

  var events = {
    // input mode
    'click input': 'inputModeOn', // we cannot use focus, bugs with device virtual keyboard :(
    'blur input': 'inputModeOffDelayed',
    'click textarea': 'inputModeOn', // we cannot use focus, bugs with device virtual keyboard :(
    'blur textarea': 'inputModeOffDelayed',

    // helpers
    'click *[data-js-call]': 'mycall',
    'click a[data-js-navigate]': 'navigate',
    // autocompletion
    'click *[data-autocomplete]': 'autocompleteStart',
    //'blur *[data-autocomplete]': 'autocompleteStopDelayed', // keep 0.5 sec on screen.
    'keyup *[data-autocomplete]': 'autocompleteCall'
  };

  var View = Backbone.View.extend({
  
    lastInput : null,
  
    initialize: function () {
      // before anything, linking the DOM to this view.
      this.el.view = this;
      // merging this.events with events.
      this.events = _.assign(events, this.events || {});
      // proxy func call.
      return this.myinitialize.apply(this, arguments);
    },

    mycall: function (e) {
      return this[$(e.currentTarget).attr("data-js-call")](e);
    },

    navigate: function (e) {
      var $a = $(e.currentTarget)
        , href = $a.attr("href")
        , disabled = $a.attr("disabled");
      
      // prevent other execution
      e.preventDefault();
      e.stopPropagation();
      //
      href = (href[0] == "#") ? href.substr(1) : href;
      if (disabled === undefined)
        Y.Router.navigate(href, {trigger: true});
      return false;
    },

    clearInputModeOffDelayed: function () {
      if (this.inputModeOffTimeout) {
        window.clearTimeout(this.inputModeOffTimeout);
        this.inputModeOffTimeout = null;
      }
    },

    inputModeOn: function (e) {

      
      this.lastInput = document.activeElement.id;
     
      this.clearInputModeOffDelayed();
      if ($(e.target).attr("data-autocomplete"))
        this.autocompleteStart(e);
      Y.GUI.inputMode(true);
      return true;
    },

    inputModeOffTimeout: null,

    inputModeOffDelayed: function (e) {

      this.clearInputModeOffDelayed();
      
      var that = this;
      this.inputModeOffTimeout = window.setTimeout(function () {

        var activeElement = document.activeElement;
        if (activeElement && activeElement.nodeName.toLowerCase() === "input") {
          //console.log('View.js: new activeElement is an input');
          return; // security...
        }
        //console.log('View.js: => input mode off ' + activeElement.nodeName + ' => on bascule en input mode off');

		/*console.log('lastInput ',that.lastInput);*/
		
		/*
		if (that.lastInput !== null)
		{
			var element = $('#'+that.lastInput);
			console.log('element où on force blur ',element)
			
			if (element.is('input')) element.attr('readonly', 'readonly'); // Force keyboard to hide on input field.
		    if (element.is('textarea')) element.attr('disabled', 'true'); // Force keyboard to hide on textarea field.
		    setTimeout(function() {
		        element.blur();  //actually close the keyboard
		        // Remove readonly attribute after keyboard is hidden.
		        if (element.is('input')) element.removeAttr('readonly');
		        if (element.is('textarea')) element.removeAttr('disabled');
		        console.log('View.js on cache le clavier');
		        
		    }, 100);
		};*/
		
		/*
		console.log('View.js action ');
		$(activeElement).filter(':input:focus').blur();
		*/
		   
        Y.GUI.inputMode(false);
      }, 100);
      // au cas ou ... on n'a pas d'autres moyens de toute façon..
      this.autocompleteStopDelayed(e);
      return true;
    },

    inputModeOff: function (e) {
      //console.log('View.js: input mode off');
      this.clearInputModeOffDelayed();
      Y.GUI.inputMode(false);
      return true;
    },

    close : function () {
      this.inputModeOff();
      this.autocompleteStop();
      this.off();
      if (typeof this.onClose === "function")
        this.onClose();
    },

    // scroll helpers
    scrollTop: function () {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    },

    scrollBottom: function () {
      document.documentElement.scrollTop = 1000000;
      document.body.scrollTop = 1000000;
    },

    scrollAt: function (val) {
      // FIXME
    },

    // autocomplete helpers
    autocompleteObj: null,
    autocompleteTimeout: null,

    autocompleteStart: function (e) {
      if (this.autocompleteTimeout) {
        window.clearTimeout(this.autocompleteTimeout);
        this.autocompleteTimeout = null;
      }
      if (this.autocompleteObj) {
        this.autocompleteObj.dispose();
        this.autocompleteObj = null;
      }
      //
      var fetchFunctionName = $(e.target).attr("data-autocomplete");
      assert(typeof this[fetchFunctionName] === "function");
      this.autocompleteObj = new Y.Autocomplete();
      this.autocompleteObj.on("input.temporized", function (input) {
        // fetching data for input
        this[fetchFunctionName](input, _.bind(function (err, data) {
          // FIXME: this function will not be disposed :(
          if (err)
            return this.autocompleteObj.trigger("fetched.error", err);
          this.autocompleteObj.trigger("fetched.result", data || []);
        }, this));
      }, this);
      var selectedFunctionName = $(e.target).attr("data-autocomplete-onselected");
      if (selectedFunctionName) {
        assert(typeof this[selectedFunctionName] === "function");
        this.autocompleteObj.on("selected", function (val) {
          //console.log('View.js: onselected (autocomplete)');
          this[selectedFunctionName](val);
        }, this);
      }
      return true;
    },

    autocompleteStopDelayed: function () {
      // keep on screen 0.5 sec.
      this.autocompleteTimeout = window.setTimeout(_.bind(function () {
        this.autocompleteStop(); 
        this.autocompleteTimeout = null;
      }, this), 500);
      return true;
    },

    autocompleteStop: function () {
      if (this.autocompleteObj) {
        this.autocompleteObj.dispose();
        this.autocompleteObj = null;
      }
      return true;
    },

    autocompleteCall: function (e) {
      if (this.autocompleteObj)
        this.autocompleteObj.trigger("input", $(e.target).val());
    }
  });

  Y.View = View;
})(Y);