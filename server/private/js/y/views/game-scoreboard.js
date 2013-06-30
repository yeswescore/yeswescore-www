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
    // render when game is refreshed.
    this.game.once('sync', this.render, this);
    this.game.on('sync', this.renderGame, this);
  },
  
  render: function () {
    this.$el.html(this.templates.scoreboard({
      game:this.game.attributes,
    }));
    return this;
  },
  
  // avoid flickering
  renderGame: function () {
    var score = this.game.getScore()
      , sets = this.game.getSets('&nbsp;');
    
    this.$('span[data-var="sets00"]').html(sets[0][0]);
    this.$('span[data-var="sets10"]').html(sets[1][0]);
    this.$('span[data-var="sets20"]').html(sets[2][0]);
    this.$('span[data-var="sets01"]').html(sets[0][1]);
    this.$('span[data-var="sets11"]').html(sets[1][1]);
    this.$('span[data-var="sets21"]').html(sets[2][1]);
    this.$('span[data-var="score0"]').html(score[0]);
    this.$('span[data-var="score1"]').html(score[1]);
  },
  
  onClose: function () {
    this.game.off('sync', this.render, this);
    this.game.off('sync', this.renderGame, this);
  }
});