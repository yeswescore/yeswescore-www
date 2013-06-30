Y.Views.Pages.Club = Y.View.extend({
  events : {
    'mousedown .button.send' : 'sendComment',
    'mousedown .button.login': 'goToLogin'/*,
    'click li': 'goToGame'*/
  },

  pageName: "club",
  pageHash : "clubs/",
  
  games: null, // game collection
  game: null,  // eventualy displayed game
  
  myinitialize : function() {
    // header
    Y.GUI.header.title(i18n.t('club.title'));  	
    Y.GUI.header.show();

    this.templates = {
      page: Y.Templates.get('page-club')
    };
    
    // creating game collection
    this.games = new GamesCollection();
    
    // subviews
    this.subviews = {
      'div[data-template="club-infos"]': new Y.Views.ClubInfos({id: this.id}),
      'ul[data-template="club-list-games"]': new Y.Views.ClubListGames({id: this.id, games: this.games})
    };
    
    // rendering subview game, when search is finished.
    this.games.once("sync", this.renderGame, this);
    
    this.render();
  },
  /*
    
    
    // loading templates.
    this.templates = {
      layout: Y.Templates.get('empty'),
      game: Y.Templates.get('game'),  
      listmatch: Y.Templates.get('gameShortList'),           
      club:  Y.Templates.get('club'),
      clubempty:  Y.Templates.get('clubEmpty'),
      comment: Y.Templates.get('gameCommentsComment'),
      error: Y.Templates.get('error'),
      ongoing: Y.Templates.get('ongoing')      
    };
    
    // we render immediatly
    this.render();        

    this.streamItemsCollection = null;
    this.game = null;

    if (param.gameid!==undefined) {
      this.gameid = param.gameid;  	
    }
    else
      this.gameid=0;
    
    if (param.id!==undefined) {  
      this.clubid = param.id;  
      this.club = new ClubModel({id : this.clubid});   
      this.club.once('sync', this.renderClub, this);      
      this.club.fetch();
    }
    else {
      this.clubid = 0;
      this.renderNoClub();
    }
    
    this.follow = 'false';    
    
    // loading owner
    this.owner = Y.User.getPlayer();
  },
  */

  render: function () {
    this.$el.html(this.templates.page());
    // render subviews (automatic)
    this.renderSubviews();
    return this;
  },
  
  renderGame: function () {
    if (this.games.length > 0) {
      this.game = this.games.at(0);
      // subview game
      this.addSubview('div[data-template="game"]', new Y.Views.Game({game: this.game}));
    }
  },

  /*
  goToGame: function (elmt) {
    if (elmt.currentTarget.id) {
      this.gameid = elmt.currentTarget.id;      
      Y.Router.navigate("games/"+this.gameid+"/club/"+this.clubid, {trigger: true}); 
    }
  },
 */
  /*
  renderListGame : function() {
       
    this.games = new GamesCollection();
    
    console.log('renderListGame clubid', this.club.get('id'));
    
    this.games.addSearch('club');
    this.games.setClub(this.club.get('id'));  
    //this.$listmatch.html(this.templates.listmatch({'games':this.games}));
    $("#listMatchClubs").html(this.templates.ongoing());

    var that = this; 
    this.games.fetch().done($.proxy(function () {  
      if (that.games.toJSON().length === 0) {
        $("#listMatchClubs").html(that.templates.error());
        //$(that.listview).i18n();
      }
      else {
        if (this.gameid == 0) {
          console.log('pas de gameid, on cherche le premier');
          that.gameid = that.games.toJSON()[0].id;
        }
        
        $("#listMatchClubs").html(that.templates.listmatch({ games: that.games.toJSON(), clubid: that.clubid }));  	
        //$(that.listview).i18n();
      }
      
      that.renderGame();
      //that.renderComments();
      
    }, this));  
  },
  */
  /*
  renderGame : function() {
    
    if (this.gameid == 0) {
      $("#scoreBoard").html(this.templates.error({}));  
    }
    else {
      var pollingOptions = { delay: Y.Conf.get("game.refresh") };
    
      this.game = new GameModel({id : this.gameid});
      this.game.once("sync", this.renderViewGame, this);
      this.poller = Backbone.Poller.get(this.game, pollingOptions);
      this.poller.start();
      //this.game.fetch();
      
      this.streamItemsCollection = new StreamsCollection([], {gameid : this.gameid});
      this.streamItemsCollection.on("sync", this.renderListComments, this); 
      //this.streamItemsCollection.fetch();
      this.poller2 = Backbone.Poller.get(this.streamItemsCollection, pollingOptions);
      this.poller2.start();
	        
    }
  },  
  */
  
  renderViewGame : function() {
 

	  
	  var sets = this.game.getSets('&nbsp')
      , score = this.game.getScore();
	   
	  $("#scoreBoard").html(this.templates.game({ 
	  game: this.game.toJSON()
  	  , team1_set1 : sets[0][0]
  	  , team1_set2 : sets[1][0]
      , team1_set3 : sets[2][0]
      , team2_set1 : sets[0][1]
      , team2_set2 : sets[1][1]
      , team2_set3 : sets[2][1]
      , team1_sets : String(score[0]) || '&nbsp'
      , team2_sets : String(score[1]) || '&nbsp'	  
	  , timer : timer }));  	
	  
	  $("#scoreBoard").i18n();
	        
  },  
  
  renderListComments : function() {
  
    $listComment = this.$(".list-comment");
    
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
  },  
 
  sendComment : function() {
  
    if (this.owner===undefined)
      Y.Router.navigate("players/signin", {trigger: true});  
   else {
   
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
    
    }  
    
  }, 
  
  renderNoClub : function() {
    /* On affiche les infos du club*/
    this.$el.html(this.templates.clubempty({}));

    $('.ltcol').hide();	

    this.renderGame();

    this.$el.i18n();    

    return this;
  },  
 
  // render the content into div of view
  renderClub : function() {
    
    this.clubid = this.club.get('id'); 
    
    /* On affiche les infos du club*/
    this.$el.html(this.templates.club({
      club : this.club.toJSON(),follow:this.follow
    }));

    // can the user post comments ?
    if (Y.User.getPlayer() === null) {
      $('.commentBoard').removeClass("logged");
      $('.commentBoard').addClass("unlogged");
    } else {
      $('.commentBoard').removeClass("unlogged");
      $('.commentBoard').addClass("logged");
    }
    this.renderListGame(); 
    this.$el.i18n();    

    return this;
  },

  goToLogin: function () {
    Y.Router.navigate("players/signin?back=true", {trigger: true});
  },
  
  onClose : function() {
    this.game.off("sync", this.renderGame, this);
/*     
    if (this.game!==null) {
      this.game.off('sync', this.renderViewGame, this);
      this.poller.stop();    
    }
    
    if (this.streamItemsCollection!==null) {    
      this.streamItemsCollection.off("sync", this.renderListComments, this);
      this.poller2.stop();      	
    }
    */
  }
});