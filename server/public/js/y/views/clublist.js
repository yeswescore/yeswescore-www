Y.Views.ClubList = Y.View.extend({
  el : "#content",

  events : {
    "keyup input#search-basic" : "search",
    "click li": "chooseClub"
  },

  listview : "#listPlayersView",

  pageName: "clubList",
  pageHash : "clubs/list", 

  initialize : function() {
  
	//header    
    Y.GUI.header.title(i18n.t('clublist.title')); 
    
    Y.GUI.header.show();
  
    // loading templates.
    this.templates = {
      clublist:  Y.Templates.get('clubList'),
      clubsearch: Y.Templates.get('clubListSearch')
    };
        
    //this.playerListViewTemplate = Y.Templates.get('playerList');
    //this.playerSearchTemplate = Y.Templates.get('players');
    
    // we render immediatly
    this.render();    

	console.log('id  ',this.id);

	// renderList
    if (this.id !== 'null') {
      this.clubs = new ClubsCollection();
      this.clubs.setMode('search', this.id);
      this.clubs.once('sync', this.renderList, this);            
      this.clubs.fetch();
    }
    
    
    
  },

  chooseClub : function(elmt) { 
    var ref = elmt.currentTarget.id;
	Y.Router.navigate(ref, {trigger: true});  
  },

  search : function() {
    // FIXME if($("#search-basic").val().length>3) {
    var q = $("#search-basic").val();
    $(this.listview).empty();
    
    this.clubs.setMode('search', q);
    this.clubs.fetch();
    
	try {
	    $(this.listview).html(this.templates.clublist, {
	      clubs : this.clubs.toJSON(),
	      query : q
	    });
    }
    catch(e) {

    }
    

    return this;
  },

  // render the content into div of view
  render : function() {
    this.$el.html(this.templates.clubsearch({}));

    return this;
  },

  renderList : function(query) {
  
  	console.log('renderList clubs ',this.clubs.toJSON());
  
    $(this.listview).html(this.templates.clublist({
      clubs : this.clubs.toJSON(),
      query : ''
    }));

    this.$el.i18n();

    return this;
  },

  onClose : function() {
    this.undelegateEvents();

    this.clubs.off('sync', this.renderList, this);
  }
});
