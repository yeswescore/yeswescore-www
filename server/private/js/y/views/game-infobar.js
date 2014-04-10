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
    this.game.on('sync', this.renderGame, this);
  },
  
  render: function () {
    this.$el.html(this.templates.list());
    this.$el.i18n();
    return this;
  },
  
  // avoid flickering
  renderGame: function () {
    this.$('span[data-var="timer"]').text(this.game.getElapsedTime());
    this.$('span[data-var="startDate"]').text(this.game.getStartDate());
    this.$('span[data-var="startTime"]').text(this.game.getStartTime());
    this.$('span[data-var="status"]').text(this.game.getStatusText());
    this.$('span[data-var="city"]').text(this.game.getCity());   
    
    if (this.game.get('infos').official) {
      this.$('span[data-var="official"]').text(i18n.t('game.official')); 
    }
    else {
      this.$('span[data-var="official"]').text(i18n.t('game.notofficial')); 
    }

  },
  
  onClose: function () {
    this.game.off('sync', this.render, this);
  }
});