Y.Views.Club = Y.View.extend({
  el : "#content",
  
  events : {
    'mousedown .button.send' : 'sendComment',
    'click li': 'goToGame'
  },

  pageName: "club",
  pageHash : "clubs/",
  gameid: 0,
  
  initialize : function(param) {
  
	//header    
  	Y.GUI.header.title(i18n.t('club.title'));  	
  	Y.GUI.header.show();
  
    // loading templates.
    this.templates = {
      layout: Y.Templates.get('empty'),
      game: Y.Templates.get('game'),  
      listmatch: Y.Templates.get('gameShortList'),           
      club:  Y.Templates.get('club'),
      comment: Y.Templates.get('gameCommentsComment'),
      error: Y.Templates.get('error'),
      ongoing: Y.Templates.get('ongoing')      
    };
    
    // we render immediatly
    this.render();        

	this.streamItemsCollection = null;
	this.game = null;

	this.clubid = param.id;
	
	console.log('param',param);
	
	if (param.gameid!==undefined) {
	  this.gameid = param.gameid;  	
	}
	else
	  this.gameid=0;

    this.club = new ClubModel({id : this.clubid});   
    this.club.once('sync', this.renderClub, this);      
    this.club.fetch();
    
    this.follow = 'false';    
    
    // loading owner
    this.owner = Y.User.getPlayer();

  },

	

  render: function () {
    // empty page.
	  this.$el.html(this.templates.layout());

	  return this;
  },

  goToGame: function (elmt) {
    if (elmt.currentTarget.id) {
      this.gameid = elmt.currentTarget.id;
      
      //console.log(this.gameid);
      //this.renderGame();
      
      Y.Router.navigate("clubs/"+this.clubid+"/game/"+this.gameid, {trigger: true}); 
      
    }
  },  

  /*
  renderComments : function() {
    
    if (this.gameid!=0) {
    
	  this.streamItemsCollection = new StreamsCollection([], {gameid : this.gameid});
	  this.streamItemsCollection.on("sync", this.renderListComments, this);
	
	  // pool the collection regulary
	  var pollingOptions = { delay: Y.Conf.get("game.refresh") };
	  this.poller = Backbone.Poller.get(this.streamItemsCollection, pollingOptions);
	  this.poller.start();
	        
    }
  },
  */

 
  renderListGame : function() {
    var that = this;    
    this.games = new GamesCollection();
    this.games.addSearch('club',this.club.get('id'));  
    //this.$listmatch.html(this.templates.listmatch({'games':this.games}));
    $("#listMatchClubs").html(that.templates.ongoing());


    this.games.fetch().done($.proxy(function () {  
      if (that.games.toJSON().length === 0) {
        $("#listMatchClubs").html(that.templates.error());
        //$(that.listview).i18n();
      }
      else {
      	//console.log('games',that.games.toJSON()[0].id);
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
  
  renderGame : function() {
    
    if (this.gameid == 0) {
      $("#scoreBoard").html(this.templates.error({}));  
    }
    else {
    
      var pollingOptions = { delay: Y.Conf.get("game.refresh") };
    
	  this.game = new GameModel({id : this.gameid});
	  this.game.on("sync", this.renderViewGame, this);
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
  
  renderViewGame : function() {
 
    if (this.game.toJSON().length === 0) {
	  $("#scoreBoard").html(this.templates.error());
	  $("#scoreBoard").i18n();
	}
	else {	      
	  var timer = '';
	  var game = this.game;
		  	  
	  if ( game.get('status') === "finished" ) {
		       
	    var dateEnd = Date.fromString(game.get('dates').end);      
		var dateStart = Date.fromString(game.get('dates').start);
		          	
		timer = dateEnd - dateStart;
		var dateTimer = new Date(0, 0, 0, 0, 0, 0, timer);  
		      
		if (timer>0)       
		  timer = ('0'+dateTimer.getHours()).slice(-2)+':'+('0'+dateTimer.getMinutes()).slice(-2);  
		else
		  timer = '00:00';   
		         
		$("#statusButton").html(i18n.t('game.finished'));	         
		$("#optionButton").attr("id","statusRestart");
		$("#statusRestart").html(i18n.t('game.restart'));
		 	  		        
	  }
	  else if ( game.get('status') === "ongoing" ) {		        
		 var dateEnd = new Date();
		 var dateStart = Date.fromString(game.get('dates').start);
		 timer = dateEnd - dateStart;
   
		 if (timer>0)
		 {		          
	       var dateTimer = new Date(0, 0, 0, 0, 0, 0, timer);         
		   timer = ('0'+dateTimer.getHours()).slice(-2)+':'+('0'+dateTimer.getMinutes()).slice(-2);        
		 }
		 else {
		   timer = '00:00';  		    
		 }       
	  }	      
	   
	  $("#scoreBoard").html(this.templates.game({ 
	  game: this.game.toJSON(),timer : timer }));  	
	  $("#scoreBoard").i18n();
	        
	 }
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
 
  // render the content into div of view
  renderClub : function() {
  	
  	this.clubid = this.club.get('id'); 
  	
  	/* On affiche les infos du club*/
    this.$el.html(this.templates.club({
      club : this.club.toJSON(),follow:this.follow
    }));

	this.renderListGame();
	
		
	this.$el.i18n();    

    return this;
  },

  onClose : function() {
    this.undelegateEvents();
    this.club.off("sync", this.renderClub, this);  
     
	if (this.game!==null) {
      this.game.off('sync', this.renderViewGame, this);
      this.poller.stop();    
    }
    
	if (this.streamItemsCollection!==null) {    
      this.streamItemsCollection.off("sync", this.renderListComments, this);
      this.poller2.stop();      	
    }
    
  }
});