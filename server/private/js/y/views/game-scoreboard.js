Y.Views.GameScoreboard = Y.View.extend({
  game: null,
  
  myinitialize : function() {
    assert(this.options.game);
    
    this.game = this.options.game;
    
    this.templates = {
      scoreboard: Y.Templates.get('game-scoreboard')
    };
    
    // render immediately
    if (this.options.autorender)
      this.render();
  },
  
  render: function () {
    this.$el.html(this.templates.scoreboard({
      game:this.game.attributes,
      score: this.game.getScore(),
      sets: this.game.getSets('&nbsp;')
    }));
    return this;
  }
});