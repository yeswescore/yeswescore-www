Y.Views.Pages.ClubList = Y.View.extend({
  events : {
    "keyup input#search-basic": "searchOnKey",
    "click .magnifier": "search",
    "click li": "goToClub"
  },

  pageName: "clubList",
  pageHash : "clubs/list", 
  
  text: null,
  clubs: null,
  
  myinitialize : function() {
    Y.GUI.header.title(i18n.t('clublist.title')); 
    Y.GUI.header.show();
    
    //
    this.text = this.options.text;
    
    // loading templates.
    this.templates = {
      page:  Y.Templates.get('page-clublist'),
      search: Y.Templates.get('search'),
      listclub: Y.Templates.get('list-clubs')
    };

    //
    this.clubs = new ClubsCollection();
    
    this.search();
    
    // we render immediatly
    this.render();
  },
  
  searchOnKey: function (event) {
    if(event.keyCode == 13){
      // the user has pressed on ENTER
      this.search(event);
    }
    return this;
  },

  search: function (ev) {
    // si evenement => recherche depuis un click sur l'icone loupe
    // sinon        => recherche depuis la page precedente.
    this.text = ev ? $("#search-basic").val() : this.text;
    
    // on lance la recherche
    this.clubs.setMode('search', this.text);
    this.clubs.fetch().always($.proxy(this.renderSearchResult, this));    
    
    return this;
  },

  render : function() {
    // layout global de la page
    this.$el.html(this.templates.page());
    // on y ajoute un moteur de recherche
    this.$('div[data-template="search"]').html(this.templates.search());
    this.$el.i18n();
    // et une liste de resultats
    this.renderSearchResult();
    return this;
  },

  renderSearchResult: function () {
    if (this.unloaded)
      return; // avoiding GUI race conditions.
    var clubs = this.clubs.toJSON();
    var $list = this.$('ul[data-template="list"]');
    var $message = this.$(".message.noresult");
    if (clubs.length === 0) {
      $message.show();
      $list.hide();
    } else {
      $message.hide();
      // FIXME: we should escape query
      $list.html(this.templates.listclub({clubs:clubs, query: this.text}));
      $list.show();
    }
    return this;
  },
  
  goToClub : function(elmt) { 
    var clubid = $(elmt.currentTarget).data("clubid");
    Y.Router.navigate("#clubs/"+clubid, {trigger: true});  
  }
});
