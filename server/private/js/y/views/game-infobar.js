Y.Views.GameInfoBar = Y.View.extend({
  game: null,
  
  myinitialize : function() {
    assert(this.options.game);
  
    this.game = this.options.game;
    this.templates = {
      list: Y.Templates.get('game-infobar')
    };
    if (this.options.autorender)
      this.render();
    // render when game is refreshed.
    this.game.on('sync', this.render, this);
  },
  
  render: function () {
    this.$el.html(this.templates.list({
      startDate: this.game.getStartDate(),
      startTime: this.game.getStartTime(),
      status: this.game.getStatusText(),
      timer: this.game.getElapsedTime(),
      city: this.game.getCity()
    }));
    this.$el.i18n();
    return this;
  },
  
  onClose: function () {
    this.game.off('sync', this.render, this);
  }
});