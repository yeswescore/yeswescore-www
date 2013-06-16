Y.Views.Index = Y.View.extend({
  el: "#content",
  
  events: {
    "keyup input#search-basic": "searchOnKey",
    "mousedown .magnifier": "searchButton"
  },  

  pageName: "index",
  pageHash : "index",  
  
  myinitialize: function () {
    Y.GUI.header.title(i18n.t('index.title'));

    var that = this;
    //
    this.indexViewTemplate = Y.Templates.get('index');
    
    Y.GUI.header.hide();
    //Y.GUI.navbar.hide();

	/*
    var playerDeferred = $.Deferred();
    this.$el.html("please wait, loading player");
    Y.User.getPlayerAsync(function (err, player) {
      if (err) {
        // no player => creating player.
     
        // creating the player.
        Y.User.createPlayerAsync(function (err, player) {
          // FIXME: err, reject deferred
      
          playerDeferred.resolve();
        });
        return;
      }
      playerDeferred.resolve();
    });

    // FIXME: handling error with deferreds
    $.when(
      playerDeferred
    ).done(function () {
      that.render();

    });
    */
    
    this.render();
    
  },

  searchButton: function () {
    this.search();
  },

  searchOnKey: function (event) {
    if(event.keyCode == 13){
      // the user has pressed on ENTER
      this.search();
    }
    return this;
  },
  
  search: function () {
  
	var q = $("#search-basic").val();
  	
  	if (q.length>0)
  	  Y.Router.navigate('clubs/list/'+q, {trigger: true});
   
  },  

  // should not take any parameters
  render: function () {
    this.$el.html(this.indexViewTemplate(), {});
    return this;
  },

  onClose: function () {
    this.undelegateEvents();
    //this.games.off("all", this.renderList, this);
  }
});