Y.Views.GameComments = Y.View.extend({
  game: null,
  streamItemsCollection: null,
  
  myinitialize : function() {
    assert(this.options.game);
    
    this.game = this.options.game;
    
    this.templates = {
      comments: Y.Templates.get('game-comments')/*,
      list: Y.Templates.*/
    };
    
    //
    var pollingOptions = { delay: Y.Conf.get("game.refresh") };
    this.streamItemsCollection = new StreamsCollection([], {gameid : this.game.get('id')});
    this.streamItemsCollection.on("sync", this.render, this); 
    this.poller = Backbone.Poller.get(this.streamItemsCollection, pollingOptions);
    this.poller.start();
    
    // render immediately
    if (this.options.autorender)
      this.render();
  },
  
  render: function () {
    this.$el.html(this.templates.comments({
      game: this.game.attributes
    }));
    return this;
  },
  
  onClose: function () {
    this.streamItemsCollection.off("sync", this.render, this);
    this.poller.stop();
  }
});