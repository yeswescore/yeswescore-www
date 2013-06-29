Y.Views.Game = Y.View.extend({
  game: null,
  
  myinitialize : function() {
    assert(this.options.game || this.id);
    
    this.templates = {
      game: Y.Templates.get('game')
    };
    
    // necessitera un refacto le jour ou l'on a la registry.
    if (this.options.game) {
      this.game = this.options.game;
    } else {
      this.game = new GameModel({id : this.id});
      this.game.once("sync", this.renderViewGame, this);
    }
    
    // subviews
    this.subviews = {
      'div[data-template="game-infobar"]': new Y.Views.GameInfoBar({game: this.game})/*,
      'div[data-template="game-scoreboard"]': new Y.Views.GameScoreboard({game: this.game}),
      'div[data-template="game-comments"]': new Y.Views.GameComments({game: this.game})*/
    };
    
    // pooling de la game
    var pollingOptions = { delay: Y.Conf.get("game.refresh") };
    this.poller = Backbone.Poller.get(this.game, pollingOptions);
    this.poller.start();
    
    // render immediately
    this.render();
  },
  
  render: function () {
    this.$el.html(this.templates.game());
    // render subviews (automatic)
    this.renderSubviews();
    return this;
  },
  
  onClose: function () {
    this.poller.stop();
  }
});