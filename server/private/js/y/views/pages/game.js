Y.Views.Pages.Game = Y.View.extend({
  pageName: "game",
  pageHash : "games/",
  
  game: null,  // displayed game
  
  myinitialize : function() {
    // header
    Y.GUI.header.title(i18n.t('game.title'));   
    Y.GUI.header.show();

    this.templates = {
      page: Y.Templates.get('page-game')
    };
    
    this.game = new GameModel({id : this.id});
    
    // subviews
    this.subviews = {
      'div[data-template="game"]': new Y.Views.Game({game: this.game})
    };
    
    this.game.once('sync', this.renderClub, this);
    
    this.render();
  },

  render: function () {
    this.$el.html(this.templates.page());
    // render subviews (automatic)
    this.renderSubviews();
    return this;
  },
  
  renderClub: function () {
    // randomly choose a club.
    var teams = this.game.get('teams');
    var clubid = null;
    if (teams[0].players[0].club &&
        teams[0].players[0].club.id)
      clubid = teams[0].players[0].club.id;
    else if (teams[1].players[0].club &&
             teams[1].players[0].club.id)
      clubid = teams[1].players[0].club.id;
    //
    $clubInfos = this.$('div[data-template="club-infos"]');
    $clubListGames = this.$('div[data-template="club-list-games"]');
    //
    if (clubid === null) {
      $clubInfos.html(i18n.t("club.noneAssociated"));
      this.$(".list-games").hide();
    } else {
      // adding subviews
      this.addSubview('div[data-template="club-infos"]',  new Y.Views.ClubInfos({id: clubid}));
      this.addSubview('ul[data-template="club-list-games"]', new Y.Views.ClubListGames({id: clubid}));
    }
  },
  
  onClose: function () {
    this.game.off('sync', this.renderClub, this);
  }
});