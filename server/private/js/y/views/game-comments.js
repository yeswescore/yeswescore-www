Y.Views.GameComments = Y.View.extend({
  events : {
    'mousedown .button.send' : 'sendComment',
    'mousedown .button.login': 'goToLogin'
  },
  
  game: null,
  streamItemsCollection: null,
  
  timeout: null,
  
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
  
  sendComment : function() {
    if (this.player===undefined)
      return Y.Router.navigate("players/signin", {trigger: true});
    
    var playerid = this.player.id
    , token  = this.player.get('token')
    , gameid = this.game.get('id')
    , comment = $('#messageText').val()
    , that = this;

    if (comment.length === 0)
      return; // empty => doing nothing.
    
    //on bloque le textarea  
    $('.button').addClass('disabled');
      
    var stream = new StreamModel({
          type : "comment",
          playerid : playerid,
          token : token,
          text : comment,
          gameid : gameid
    });
    stream.save().done(function (streamItem) {
      that.streamItemsCollection.fetch();
      that.$('#messageText').val('');
      that.scrollTop();
      that.$('.button').removeClass("disabled");
    }).fail(function (err) {
      that.$(".button.send").addClass("ko");
      that.timeout = window.setTimeout(function () {
        that.$(".button.send").removeClass("ko");
        that.timeout = null;
        that.$('.button').removeClass("disabled");    
      }, 4000);
    }); 
  },
  
  reportComment : function(e) {
    var elmt = $(e.currentTarget);
    var id = elmt.attr("data-js-streamitemid");

    Backbone.ajax({
        dataType : 'json',
        url : Y.Conf.get("api.url.reports.games")+ this.game.get('id') + '/stream/'+ id + '/',
        type : 'GET',
        success : function(result) {
          elmt.html(i18n.t('gamecomment.alerted'));
          elmt.removeAttr('href');
          elmt.removeAttr('data-js-call');
        }
      });
  },
  
  goToLogin: function () {
    Y.Router.navigate("players/signin?back=true", {trigger: true});
  },
  
  onClose: function () {
    this.streamItemsCollection.off("sync", this.render, this);
    this.poller.stop();
    if (this.timeout) {
      window.clearTimeout(this.timeout);
      this.timeout = null;
    }
  }
});