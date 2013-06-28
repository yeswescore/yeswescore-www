Y.Views.Pages.ClubList = Y.View.extend({
  events : {
    // "keyup input#search-basic" : "search", // FIXME: keypress ENTER.
    "click .magnifier": "search",
    "click li": "chooseClub"
  },

  listview : "#listClubsView",

  pageName: "clubList",
  pageHash : "clubs/list", 
  
  clubs:null,

  myinitialize : function() {
  
    //header    
    Y.GUI.header.title(i18n.t('clublist.title')); 
    
    Y.GUI.header.show();
  
    // loading templates.
    this.templates = {
      clublist:  Y.Templates.get('clubList'),
      clubsearch: Y.Templates.get('clubListSearch'),
      error: Y.Templates.get('error'),
      ongoing: Y.Templates.get('ongoing')  
    };
        
    //this.playerListViewTemplate = Y.Templates.get('playerList');
    //this.playerSearchTemplate = Y.Templates.get('players');
    
    // we render immediatly
    this.render();    

    this.clubs = new ClubsCollection();

    // renderList
    if (this.id !== 'null') {
      this.clubs.setMode('search', this.id);
      this.clubs.on('sync', this.renderList, this);            
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
    
    var that = this;
    this.clubs.setMode('search', q);

    this.clubs.fetch().done($.proxy(function () {  

      if (that.clubs.toJSON().length === 0) {
        $(that.listview).html(that.templates.error());
      }
      else
        $(that.listview).html(that.templates.clublist({ clubs: that.clubs.toJSON(), query: q }));
    	
    
    	
      $(that.listview).i18n();
      
    }, this));    
    

    return this;
  },

  // render the content into div of view
  render : function() {
    this.$el.html(this.templates.clubsearch({}));
    this.$el.i18n(); 

    return this;
  },

  renderList : function(query) {
  
    $(this.listview).html(this.templates.clublist({
      clubs : this.clubs.toJSON(),
      query : ''
    }));

    this.$el.i18n();

    return this;
  },

  onClose : function() {
    this.clubs.off('sync', this.renderList, this);
  }
});
