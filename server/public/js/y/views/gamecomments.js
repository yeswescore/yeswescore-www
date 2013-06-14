Y.Views.GameComments = Y.View.extend({
  el:"#content",
  gameid:'',

  pageName: "gameComment",
  pageHash : "games/comment/",

  shareTimeout: null,
  isSend : false,

  events: {
    'mousedown .button.send' : 'sendComment'
  },

  myinitialize:function() {
    this.pageHash += this.id; 
    this.gameid = this.id;
    this.game = null;
    this.streamItemsCollection = null;

    // header
    Y.GUI.header.title(i18n.t('gamecomment.title'));
  
    // loading templates.
    this.templates = {
      layout: Y.Templates.get('gameComments'),
      score:  Y.Templates.get('gameCommentsScore'),
      comment: Y.Templates.get('gameCommentsComment')
    };

    // loading owner
    this.owner = Y.User.getPlayer();

    // we render immediatly
    this.render();

    // FIXME: utiliser une factory pour recuperer l'objet game.
    // FIXME: quand la factory existera et que les objets seront globaux
    //         on pourra activer du pooling sur l'objet.
   	this.game = new GameModel({id : this.gameid});
   	
   	var that = this;
   	this.syncGame = function () {
      //that.game = game;
      that.renderScore(); // might be later.   	
   	};
   	
    //this.game.once("sync", this.syncGame, this);
    //this.game.fetch();

    // updating comment list when collection is updated
    this.streamItemsCollection = new StreamsCollection([], {gameid : this.gameid});
    this.streamItemsCollection.on("sync", this.renderList, this);

    // pool the collection regulary
    var pollingOptions = { delay: Y.Conf.get("game.refresh") };
    this.poller = Backbone.Poller.get(this.streamItemsCollection, pollingOptions);
    this.poller.start();
  },
  
  inputModeOn: function (e) {
    // calling parent.
    var r = Y.View.prototype.inputModeOn.apply(this, arguments);
    this.scrollBottom();
    return r;
  },

  inputModeOff: function (e) {
    // calling parent.
    var r = Y.View.prototype.inputModeOff.apply(this, arguments);
    this.scrollBottom();
    return r;
  },

  render: function () {
    // empty page.
	  this.$el.html(this.templates.layout({}));
      $('.send').i18n();	
      $('textarea').i18n();  
	  return this;
  },
  
  // score component (top of the page)
  renderScore: function () {
  
 	var timer = '';
 	var game = this.game.toJSON();
        
    if ( game.status === "finished" ) {
       
      //var dateEnd = new Date(game.dates.end);
      //var dateStart = new Date(game.dates.start);

      var dateEnd = Date.fromString(game.dates.end);      
      var dateStart = Date.fromString(game.dates.start);
          	
      timer = dateEnd - dateStart;
      var dateTimer = new Date(0, 0, 0, 0, 0, 0, timer);         
      timer = ('0'+dateTimer.getHours()).slice(-2)+':'+('0'+dateTimer.getMinutes()).slice(-2);        
        
    }
    else if ( game.status === "ongoing" ) {
      
      //comment connaitre la date actuelle par rapport au serveur ?
      var dateEnd = new Date();
      //var dateStart = new Date(game.dates.start);
      var dateStart = Date.fromString(game.dates.start);
          	
      timer = dateEnd - dateStart;
          
      if (timer>0)
      {
	      var dateTimer = new Date(0, 0, 0, 0, 0, 0, timer);         
	      timer = ('0'+dateTimer.getHours()).slice(-2)+':'+('0'+dateTimer.getMinutes()).slice(-2);        
      }
      //declenche setTimeout(); qui met à jour toutes les 50 secondes ???
      //setInterval ( this.refreshTimer, 1000 );
          
    }  
  
	this.$(".zone-score").html(this.templates.score({game : this.game.toJSON(), timer :timer}));
	  
	var startTeam = this.game.get('infos').startTeam;
	this.server1 = "";
	this.server2 = "";	  
	  
	if ( whoServe(this.game.get('infos').sets,startTeam) === startTeam ) {
	  if (this.game.get('teams')[0].id === startTeam) 
	  {
		$('.server1').addClass('server-ball');
		$('.server2').removeClass('server-ball');	
	  }
	  else {
		$('.server1').removeClass('server-ball');
		$('.server2').addClass('server-ball');						  
	  }
	}
	else {
	  if (this.game.get('teams')[0].id === startTeam) 
	  {
		$('.server1').removeClass('server-ball');
		$('.server2').addClass('server-ball');				
	  }
	  else {
		$('.server1').addClass('server-ball');
		$('.server2').removeClass('server-ball');				  
	  }
	}	  
	  
	  return this;
  },

  // liste de commentaires 
  renderList : function() {
    $listComment = this.$(".list-comment");
    var nbComments = this.streamItemsCollection.length;
    // FIXME: l18n
    if (nbComments === 0)
      this.$(".list-comment-title").html(i18n.t('game.0comment'));
    else if (nbComments === 1)
      this.$(".list-comment-title").html(i18n.t('game.1comment'));
    else if (nbComments <= 10)
      this.$(".list-comment-title").html(nbComments + " "+i18n.t('game.comments'));
    else
      this.$(".list-comment-title").html(i18n.t('game.10lastcomments'));
    // adding comment into the DOM.
    this.streamItemsCollection.forEach(function (streamItem) {
      if (!document.getElementById("comment"+streamItem.get('id'))) {
        // small fade-in effect using an hidden container.
        var divHiddenContainer = document.createElement("div");
        divHiddenContainer.style.display = "none";
        
        //filter
        streamItem = streamItem.toJSON();
        streamItem.data.text = streamItem.data.text.toString().replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&#34;");
        
        $(divHiddenContainer).html(this.templates.comment({
          streamItem  : streamItem,
          owner : (this.owner) ? this.owner.toJSON() : null
        }));
        $listComment.prepend(divHiddenContainer);
        $(divHiddenContainer).fadeIn();
      }
    }, this);
    
    $('a').i18n();
    $('span').i18n();
    
    this.game.once("sync", this.syncGame, this);
    this.game.fetch();
        
    return this;
  }, 

  deleteComment : function(e) {  
    var elmt = $(e.currentTarget);
  	var id = elmt.attr("data-js-streamitemid");
    
    Backbone.ajax({
      dataType : 'json',
      url : Y.Conf.get("api.url.games")
      + this.gameid 
      + '/stream/'
      + id 
      + '/?playerid='+this.owner.get('id')
      +'&token='+this.owner.get('token')
      +'&_method=delete',
        
      type : 'POST',
      success : function(result) {
      }
    }).always(_.bind(function () {
      // on le retire du DOM
      $("#comment"+id).fadeOut().remove();
      // on le supprime de la collection
      var streamItem = this.streamItemsCollection.findWhere({id: id});
      if (streamItem) {
        this.streamItemsCollection.remove(streamItem);
      } else {
        assert(false);
      }
    }, this));
  },

  reportComment : function(e) {
    var elmt = $(e.currentTarget);
  	var id = elmt.attr("data-js-streamitemid");

    Backbone.ajax({
        dataType : 'json',
        url : Y.Conf.get("api.url.reports.games")+ this.gameid + '/stream/'+ id + '/',
        type : 'GET',
        success : function(result) { 

          elmt.html(i18n.t('gamecomment.alerted'));
          elmt.removeAttr('href');
          elmt.removeAttr('data-js-call');
          
        }
      });
  },

  sendComment : function() {
    var playerid = this.owner.id
    , token  = this.owner.get('token')
    , gameid = this.gameid
    , comment = $('#messageText').val()
    , that = this;

    if (comment.length === 0)
      return; // empty => doing nothing.
      
    //filter
    comment = comment.toString().replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&#34;");  
      
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
	    that.shareTimeout = window.setTimeout(function () {
	      that.$(".button.send").removeClass("ko");
	      that.shareTimeout = null;
	  	  that.$('.button').removeClass("disabled");    
	    }, 4000);
    });   
    
  },

  onClose: function(){

    this.undelegateEvents();
    
    if (this.shareTimeout) {
      window.clearTimeout(this.shareTimeout);
      this.shareTimeout = null;
    }    
    
    this.game.off("sync", this.syncGame, this);
    
    this.streamItemsCollection.off('success', this.renderList, this);
    
    this.poller.stop();
  }
});