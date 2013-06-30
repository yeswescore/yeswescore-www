Y.Views.Pages.Game = Y.View.extend({
  pageName: "game",
  pageHash : "games/",
  
  games: null, // game collection
  game: null,  // eventualy displayed game
  
  myinitialize : function() {
    // header
    Y.GUI.header.title(i18n.t('game.title'));   
    Y.GUI.header.show();

    this.templates = {
      page: Y.Templates.get('page-game')
    };
    
    // subviews
    this.subviews = {
      'div[data-template="club-infos"]': new Y.Views.ClubInfos({id: this.options.clubid}),
      'ul[data-template="club-list-games"]': new Y.Views.ClubListGames({id: this.options.clubid}),
      'div[data-template="game"]': new Y.Views.Game({id: this.id})
    };
    
    this.render();
  },

  render: function () {
    this.$el.html(this.templates.page());
    // render subviews (automatic)
    this.renderSubviews();
    return this;
  }
});