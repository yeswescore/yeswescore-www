Y.Views.Pages.Club = Y.View.extend({
  pageName: "club",
  pageHash : "clubs/",
  
  isPage: true,
  
  games: null, // game collection
  game: null,  // eventualy displayed game
  
  myinitialize : function() {
    // header
    Y.GUI.header.title(i18n.t('club.title'));  	
    Y.GUI.header.show();

    this.templates = {
      page: Y.Templates.get('page-club')
    };
    
    // creating game collection
    this.games = new GamesCollection();
    
    // subviews
    this.subviews = {
      'div[data-template="club-infos"]': new Y.Views.ClubInfos({id: this.id}),
      'ul[data-template="club-list-games"]': new Y.Views.ClubListGames({id: this.id, games: this.games})
    };
    
    // rendering subview game, when search is finished.
    // depending on subview pooling (hacky)
    this.games.once("sync", this.renderGame, this);
    
    this.render();
  },

  render: function () {
    this.$el.html(this.templates.page());
    // render subviews (automatic)
    this.renderSubviews();
    return this;
  },
  
  renderGame: function () {
    if (this.games.length > 0) {
      this.game = this.games.at(0);
      // subview game
      this.addSubview('div[data-template="game"]', new Y.Views.Game({game: this.game}));
    }
  },
  
  onClose : function() {
    if (this.game)
      this.game.off("sync", this.renderGame, this);
  }
});