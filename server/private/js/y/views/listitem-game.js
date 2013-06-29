Y.Views.ListItemGame = Y.View.extend({
  game: null,
  
  // pour des raisons de performances
  // cette vue ne peut être appelle
  // qu'avec l'objet game precharge en parametre.
  myinitialize : function() {
    assert(this.options.game);
    
    this.templates = {
      game: Y.Templates.get('listitem-game')
    };
    
    //
    this.game = this.options.game;
    
    // render immediately
    this.render();
  },
  
  render: function () {
    if (this.game.error && game.error.length > 1)
      this.$el.html(this.templates.game({game: null}));      
    else {
      var score = this.game.getScore(); // [ 0, 0 ]
      var sets = this.game.getSets('&nbsp;'); // [[6, 2], [6, 3], ['&nbsp;', '&nbsp;']]
      var startDate = this.game.getStartDate();
      var status = i18n.t('game.'+this.game.status); // FIXME: risky ?
      
      this.$el.html(this.templates.game({
        game: this.game.attributes,
        score: score,
        sets: sets,
        startDate: startDate,
        status: status
      }));
    }
    return this;
  }
});