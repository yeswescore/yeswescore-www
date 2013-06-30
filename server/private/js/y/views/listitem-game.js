Y.Views.ListItemGame = Y.View.extend({
  game: null,
  
  // pour des raisons de performances
  // cette vue ne peut être appelle
  // qu'avec l'objet game precharge en parametre.
  myinitialize : function() {
    assert(this.options.game);
    
    this.game = this.options.game;
    this.templates = {
      game: Y.Templates.get('listitem-game')
    };
    if (this.options.autorender)
      this.render();
  },
  
  render: function () {
    if (this.game.error && game.error.length > 1)
      this.$el.html(this.templates.game({game: null}));      
    else {
      this.$el.html(this.templates.game({
        game: this.game.attributes,
        score: this.game.getScore(),
        sets: this.game.getSets('&nbsp;'),
        startDate: this.game.getStartDate(),
        status: this.game.getStatusText()
      }));
    }
    return this;
  }
});