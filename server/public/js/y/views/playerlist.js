Y.Views.PlayerList = Y.View.extend({
  el : "#content",

  events : {
    "keyup input#search-basic" : "search",
    "click li": "choosePlayer"
  },

  listview : "#listPlayersView",

  pageName: "playerList",
  pageHash : "players/list", 

  initialize : function() {
  
	//header    
    Y.GUI.header.title(i18n.t('playerlist.title')); 
  
    // loading templates.
    this.templates = {
      playerlist:  Y.Templates.get('playerList'),
      playersearch: Y.Templates.get('playerListSearch')
    };
        
    //this.playerListViewTemplate = Y.Templates.get('playerList');
    //this.playerSearchTemplate = Y.Templates.get('players');
    
    // we render immediatly
    this.render();    

	// renderList
    if (this.id !== 'null') {
      this.players = new PlayersCollection();
      this.players.setMode('club', this.id);
      this.players.once('sync', this.renderList, this);
            
      this.players.fetch();

    }
    
  },

  choosePlayer : function(elmt) { 
    var ref = elmt.currentTarget.id;
	Y.Router.navigate(ref, {trigger: true});  
  },

  search : function() {
    // FIXME if($("#search-basic").val().length>3) {
    var q = $("#search-basic").val();
    $(this.listview).empty();
    
    this.players.setMode('search', q);
    this.players.fetch();
    
	try {
	    $(this.listview).html(this.templates.playerlist, {
	      players : this.players.toJSON(),
	      query : q
	    });
    }
    catch(e) {

    }
    

    return this;
  },

  // render the content into div of view
  render : function() {
    this.$el.html(this.templates.playersearch({}));

    return this;
  },

  renderList : function(query) {
    $(this.listview).html(this.templates.playerlist({
      players : this.players.toJSON(),
      query : ' '
    }));

    return this;
  },

  onClose : function() {
    this.undelegateEvents();

    this.players.off('sync', this.renderList, this);
  }
});
