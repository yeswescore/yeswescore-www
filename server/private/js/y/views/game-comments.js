Y.Views.GameComments = Y.View.extend({
  game: null,
  streamItemsCollection: null,
  
  myinitialize : function() {
    assert(this.options.game);
    
    this.game = this.options.game;
    this.player = Y.User.getPlayer();
    
    this.templates = {
      comments: Y.Templates.get('game-comments'),
      listitem: Y.Templates.get('listitem-comment')
    };
    
    //
    var pollingOptions = { delay: Y.Conf.get("game.refresh") };
    this.streamItemsCollection = new StreamsCollection([], {gameid : this.game.get('id')});
    this.streamItemsCollection.on("sync", this.renderComments, this); 
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
    if (this.player) {
      $('.commentBoard').removeClass("unlogged");
      $('.commentBoard').addClass("logged");
    } else {
      $('.commentBoard').removeClass("logged");
      $('.commentBoard').addClass("unlogged");
    }
    this.$el.i18n();
    return this;
  },
  
  renderComments: function () {
    $list = this.$('div[data-template="list-comments"]');
    for (var i = 0, l = this.streamItemsCollection.length; i < l; ++i) {
      var streamItem = this.streamItemsCollection.at(i);
      if (document.getElementById("comment"+streamItem.get('id')))
        continue;
      var divHiddenContainer = document.createElement("div");
      divHiddenContainer.style.display = "none";
      $(divHiddenContainer).html(this.templates.listitem({
        streamItem: streamItem.attributes,
        playerName: streamItem.getPlayerName(),
        player: this.player
      }));
      $list.prepend(divHiddenContainer);
      $(divHiddenContainer).fadeIn();
    }
    $list.i18n();
  },
  
  onClose: function () {
    this.streamItemsCollection.off("sync", this.render, this);
    this.poller.stop();
  }
});