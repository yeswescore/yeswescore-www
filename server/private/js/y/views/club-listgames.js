Y.Views.ClubListGames = Y.View.extend({
  events : {
    'click li': 'goToGame'
  },
  
  games: null,
  
  myinitialize : function() {
    this.templates = {
      listitem: Y.Templates.get('listitem-game')
    };
    
    // query
    this.games = this.options.games || new GamesCollection();
    this.games.addSearch('club');
    this.games.setClub(this.id);  
    this.games.fetch();
    this.games.once('sync', this.render, this);
    
    if (this.options.autorender)
      this.render();
  },
  
  render: function () {
    if (this.games.length === 0) {
      this.$el.html(this.templates.listitem({game: null}));
      return this;
    }
    // once rendered, we fill the templates using listitem-game view.
    this.$el.empty();
    for (var i = 0, l = this.games.length; i < l; ++i) {
      var game = this.games.at(i);
      if (game.error && game.error.length > 1) {
        this.$el.append(this.templates.listitem({game: null}));
      } else {
        this.$el.append(this.templates.listitem({
          game: game.attributes,
          score: game.getScore(),
          sets: game.getSets('&nbsp;'),
          startDate: game.getStartDate(),
          status: game.getStatusText()
        }));
      }
    }
    return this;
  },
  
  goToGame: function (ev) {
    if (ev.currentTarget.id) {
      Y.Router.navigate("games/"+ev.currentTarget.id+"/club/"+this.id, {trigger: true}); 
    }
  },
  
  onClose : function() {
    this.games.off('sync', this.render, this);
  }
});