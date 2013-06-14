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

    //we capture config from bootstrap
    //FIXME: put a timer
    //this.config = new Config();
    //this.config.fetch();

    // we need to do 2 things 
    // - fetch games
    // - read/create the player
    // THEN
    //  render games & player.

    // second: read/create player
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