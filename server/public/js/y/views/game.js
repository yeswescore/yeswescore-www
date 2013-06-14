Y.Views.Game = Y.View.extend({
  el : "#content",
  
  displayViewScoreBoard : "#scoreBoard",
  // Flux des commentaires
  // FIXME: sort by priority
  countComment : "#countComment",
      
  events : {
    'click #facebook'       : 'share',
    'click .player-info'    : 'viewPlayer',    
    'click .playerInfos'    : 'viewPlayer',   
    'click #statusButton'   : 'statusGame',
    'click #statusRestart'  : 'restartGame',
    'click #followButton'   : 'followGame',
    'click #startTeam1'     : 'startTeam1',
    'click #startTeam2'     : 'startTeam2',        
    'click #cancelButton'   : 'cancelGame',
    'click #optionButton'   : 'optionGame',
    'click .undoSelect'     : 'undoAction',    
    'click #team1_sets_div' : 'setTeam1Score',
    'click #team2_sets_div' : 'setTeam2Score',          
    'click #team1_set1_div' : 'setTeam1Set1',
    'click #team1_set2_div' : 'setTeam1Set2',
    'click #team1_set3_div' : 'setTeam1Set3',
    'click #team2_set1_div' : 'setTeam2Set1',
    'click #team2_set2_div' : 'setTeam2Set2',
    'click #team2_set3_div' : 'setTeam2Set3',
    'click .button-comments': 'goToComment'    
  },

  pageName: "game",
  pageHash : "games/",
      
  lastScore: null,
  currentScore: null,
  statusScore: null,
  dateStart: null,

  shareTimeout: null,
  senderTimeout : null,
  undoTimeout : null,
  sharing: false,
  init: true,
  server1: false,
  server2: false,  
  
  team1_set1 : '&nbsp;'
  , team1_set2 : '&nbsp;'
  , team1_set3 : '&nbsp;'
  , team2_set1 : '&nbsp;'
  , team2_set2 : '&nbsp;'
  , team2_set3 : '&nbsp;'
  , team1_sets : '0'
  , team2_sets : '0'
  , playerid : null
  , gameid : null
  , token : null
  
  /*
  , team1 : null
  , rank1 : null
  , team1_id : null
  , team2 : null
  , rank2 : null
  , team2_id : null
  , country : null	      
  , city : null
  , playerid : null
  , token : null
  , court : null
  , surface : null
  , tour : null
  , subtype : null*/

  ,initialize : function() {
    this.pageHash += this.id;
    this.gameid = this.id;

    //header
    Y.GUI.header.title(i18n.t('game.title'));
      	
	  // loading templates.
	  this.templates = {
	    game: Y.Templates.get('game'),
	    scoreboard: Y.Templates.get('gameScoreBoard')
	  };
	          	
	  // On stock les dernieres modifs		
    this.lastScore = new Array();
    this.DB = new Y.DB("Y.Games."+this.gameid+".");
		
    // loading owner
    this.owner = Y.User.getPlayer();
    this.token = this.owner.get('token');
    this.playerid = this.owner.get('id');    
    
    //loading followed
    var games_follow = Y.Conf.get("owner.games.followed");
    if (games_follow !== undefined)
    {
      if (games_follow.indexOf(this.id) === -1) {
        this.follow = 'false';
      }
      else
        this.follow = 'true';          
    }
    else
      this.follow = 'false';

    // creating object game & stream (required by render)
    this.game = new GameModel({id : this.gameid});
    this.streams = new StreamsCollection([], {gameid : this.gameid});
       
    // Rendering.
    // first: we render immediatly
    this.render();
    // rerender on game update
    this.game.on('sync', this.render, this);
    // grabbing comments & display nb
	//this.streams.once("sync", this.renderCountComment, this);
    //this.streams.fetch();
    
    // Fetching data.
    // Pooling du model game & affichage.
    // FIXME: SI ONLINE
    // FIXME : temps de rafrichissement selon batterie et selon forfait  
    var pollingOptions = { delay: Y.Conf.get("game.refresh") };
    this.poller = Backbone.Poller.get(this.game, pollingOptions)
    this.poller.start();

  },

  shareError: function (err) {
    console.log('share error: ' + err);
    var that = this;
    this.$(".facebook").addClass("ko");
    this.shareTimeout = window.setTimeout(function () {
      that.$(".facebook").removeClass("ko");
      that.shareTimeout = null;
    }, 5000);
  },

  viewPlayer: function (elmt) {
    if (elmt.currentTarget.id) {
      var route = elmt.currentTarget.id;
      Y.Router.navigate(route, {trigger: true}); 
    }    
  },

  shareSuccess: function () {
    var that = this;
    this.$(".facebook").addClass("ok");
    this.shareTimeout = window.setTimeout(function () {
      that.$(".facebook").removeClass("ok");
      that.shareTimeout = null;
    }, 5000);
  },

  share: function () {
	  console.log('game: sharing on facebook');
    // semaphore
    if (this.sharing)
      return; // cannot click on button until previous sharing is finished.
    this.sharing = true;
    // reseting GUI.
    this.$(".faceboook").removeClass("ok");
    this.$(".faceboook").removeClass("ko");
    // clearing eventual timeouts
    if (this.shareTimeout) {
      window.clearTimeout(this.shareTimeout);
      this.shareTimeout = null;
    }
    // 
    var status = this.game.get("status");
    // cannot share canceled game
    if (status == "canceled") {
      return this.shareError("cannot share a canceled game");
    }
    // we build a message for facebook.
    // ex: [PlayersTeamA] [Versus] [PlayersTeamB]. [WinningPlayers] [scoreInfos] [score] [time]. [PROMO]
    var messages = { };
    // players names
    messages['[playersTeamA]'] = this.game.getPlayersNamesByTeam(0);
    messages['[playersTeamB]'] = this.game.getPlayersNamesByTeam(1);
    // versus text
    var versus;
    if (status == "created") {
      versus = i18n.t('game.fbversus1');
    } else if (status == "ongoing") {
      versus = i18n.t('game.fbversus2');
    } else if (status == "finished") {
      versus = i18n.t('game.fbversus3');
    } else {
      versus = "VS"; // neutral
    }
    messages['[versus]'] = versus;

    var winningTeamIndex = this.game.getIndexWinningTeam();
    var winningPlayers, scoreInfos;
    // message : [Draw] [score] in [time]/[PlayerTeamA] wins [score] in [time]
    switch (winningTeamIndex) {
      case -1:
        winningPlayers = "";
        scoreInfos = i18n.t('game.fbegality')+" !";
        break;
      case 1:
        winningPlayers = this.game.getPlayersNamesByTeam(1);
        scoreInfos = (status == "finished") ? i18n.t('game.fbstatus1'):i18n.t('game.fbstatus2');
        break;
      case 0:
        winningPlayers = this.game.getPlayersNamesByTeam(0);
        scoreInfos = (status == "finished") ? i18n.t('game.fbstatus1'):i18n.t('game.fbstatus2');
        break;
      case null:
      default:
        winningPlayers = "";
        scoreInfos = "";
        break;
    }
    messages['[winningPlayers]'] = winningPlayers;
    messages['[scoreInfos]'] = scoreInfos;
    //
    messages['[score]'] = this.game.get('infos').score;
    messages['[sets]'] = this.game.get('infos').sets;

    // hate toi de consulter 
    messages['[time]'] = ""; // FIXME: temps écoulé

    // FIXME: message promo en conf
    // FIXME: url facebook doit pointer vers la game
    messages['[PROMO]'] = "\n\n"+i18n.t('game.fbpromo');

    var messagePattern = "[playersTeamA] [versus] [playersTeamB]. [winningPlayers] [scoreInfos] [sets] [time] [PROMO]";
    var message = _.reduce(_.keys(messages), function (result, token) {
      return result.replace(new RegExp(token.toRegExp(), "g"), messages[token]);
    }, messagePattern);

    // building message
    console.log("SENDING FACEBOOK MESSAGE: " + message);
    var that = this;
    var id = String(this.id);
	  Y.Facebook.shareAsync(id, message, function (err) {
      that.sharing = false;
      if (err)
        return that.shareError(err);
      that.shareSuccess();
    });
  },
  
  
  undoAction: function() {
  
	  if (this.undoTimeout) {
		window.clearTimeout(this.undoTimeout);
		this.undoTimeout = null;
	  }
		
	  this.undoTimeout = setTimeout(_.bind(this.bufferedUndoAction, this), 1500);
			    
  },
 

  bufferedUndoAction: function () {

    	   	  
    if ( this.statusScore !== "finished"  && this.game.get('owner') === this.playerid ) {
    
    	this.lastScore = this.DB.readJSON("sets");
    	

    	      
	    if (this.lastScore !== undefined) {
	      var sets_undo = this.lastScore.pop();

	
	      //S'il s'agit du meme score
	      if (sets_undo !== undefined)
	      {
		      if (sets_undo[0] === this.currentScore ) {
		             
		        //lastScore.splice(lastScore.indexOf(sets_undo), 1);
		        this.DB.saveJSON("sets",this.lastScore);
		        
			    sets_undo = this.lastScore.pop();	    	  
	
			    	
		      }
		      else {

		      }
		  }
		  else 
		    return;
	    	  
	      var gameid = this.gameid;   
	    	  	  
	      
	      if (sets_undo !== 'undefined') {
	      
		      var game = {
				    team1_id : this.game.get('teams')[0].players[0].id
			      , team2_id : this.game.get('teams')[1].players[0].id
			      , id : this.gameid 			      
			      , playerid : this.playerid
			      , token : this.token			      			      			      
			      , country : this.game.get('location').country	      
			      , city : this.game.get('location').city
			      , court : this.game.get('infos').court
			      , surface : this.game.get('infos').surface
			      , tour : this.game.get('infos').tour
			      , subtype : this.game.get('infos').subtype			      
			      , sets :  sets_undo[0]
			      , score : sets_undo[1]
		      };
		        
	
		      this.game = new GameModel(game);	    
		      var that = this;
			  
				
			  
		      this.game.save({}, {
		      
            	  success: function(model, response) {
			        			        
			        //that.lastScore.push(model.get('options').sets);	    
			        that.currentScore = model.get('infos').sets;  
			        		
			        that.DB.saveJSON("sets",that.lastScore);         			        	              
		
	  				that.game = model;
	  				
	  				//refresh scoreboard
		    	    that.renderScoreBoard(model);
            	},
            	error : function(err) {
            	
            		console.log('erreur',err);
            		
            	
            	}
            });   
            
            
	      } 
	    }
    }
  },
      
  goToComment: function (elmt) {
    var route = $(elmt.currentTarget).attr("data-js-href");
    Y.Router.navigate(route, {trigger: true}); 
  },


 setTeamScore : function(input, div) {
  
  /*
     var score = '';	
        
    if ($.isNumeric(input))
      score = parseInt(input, 10) + 1;
    else
      score = '1';          	
    
    if ( this.statusScore === "ongoing"  ) {
	    if (this.game.get('owner') === this.playerid ) {  
		    //input.val(set);
		    
			if (div.attr('id').indexOf('team1_sets')!==-1)
		     this.team1_sets = score;
		    else if (div.attr('id').indexOf('team2_sets')!==-1)
		     this.team2_sets = score;
		     		     		     		     		        
		    //FIXME : NO HTML IN CODE
		    div.html('<div class="score sets">'+score+'</div>');
		        
		    this.bufferedSendUpdater();
	    }
	  }
	*/
	  
  },

  setTeamSet : function(input, div) {
  
     var set = '';	
        
    if ($.isNumeric(input))
      set = parseInt(input, 10) + 1;
    else
      set = '1';          	
    
    if ( this.statusScore === "ongoing"  ) {
	    if (this.game.get('owner') === this.playerid ) {  
		    //input.val(set);
		    
			if (div.attr('id').indexOf('team1_set1')!==-1)
		     this.team1_set1 = set;
		    else if (div.attr('id').indexOf('team1_set2')!==-1)
		     this.team1_set2 = set;
		    else if (div.attr('id').indexOf('team1_set3')!==-1)
		     this.team1_set3 = set;
		    else if (div.attr('id').indexOf('team2_set1')!==-1)
		     this.team2_set1 = set;
		    else if (div.attr('id').indexOf('team2_set2')!==-1)
		     this.team2_set2 = set;
		    else if (div.attr('id').indexOf('team2_set3')!==-1)
		     this.team2_set3 = set;
		     		     		     		     		        		        
		    this.bufferedSendUpdater();
		    
		     //CHANGE SERVER
		     //console.log('server1',this.server1);
		     //console.log('server2',this.server2);
		     
			if (this.server1==true) {
			  $('.server1').removeClass('server-ball');
			  $('.server2').addClass('server-ball');		
			  this.server1=false;
			  this.server2=true;		
			}
			else if (this.server2==true) {
			  $('.server1').addClass('server-ball');
			  $('.server2').removeClass('server-ball');	
			  this.server1=true;
			  this.server2=false;			  					
			}
			
			//FIXME : NO HTML IN CODE
		    div.html('<div class="score ongoing">'+set+'</div>');
			
	    }
	  }
	  else if ( this.statusScore === "created"  ) {
	  
	    var that = this;
		this.$(".status").addClass("ko");
	    this.shareTimeout = window.setTimeout(function () {
	      that.$(".status").removeClass("ko");
	      that.shareTimeout = null;
	    }, 3000);	   
	  
	  } 
	  
  },

   setTeam1Score : function() {
    //this.setTeamScore(this.team1_sets, $('#team1_sets_div'));
  },
  
   setTeam2Score : function() {
    //this.setTeamScore(this.team2_sets, $('#team2_sets_div'));
  }, 

  setTeam1Set1 : function() {
    this.setTeamSet(this.team1_set1, $('#team1_set1_div'));
  },

  setTeam1Set2 : function(options) {
    this.setTeamSet(this.team1_set2, $('#team1_set2_div'));
  },

  setTeam1Set3 : function() {
    this.setTeamSet(this.team1_set3, $('#team1_set3_div'));
  },

  setTeam2Set1 : function() {  
    this.setTeamSet(this.team2_set1, $('#team2_set1_div'));
  },

  setTeam2Set2 : function() { 
    this.setTeamSet(this.team2_set2, $('#team2_set2_div'));
  },

  setTeam2Set3 : function() { 
    this.setTeamSet(this.team2_set3, $('#team2_set3_div'));
  },


  bufferedSendUpdater: function () {
  
    var gameid = this.gameid
    , team1_set1 = this.team1_set1
    , team1_set2 = this.team1_set2
    , team1_set3 = this.team1_set3
    , team2_set1 = this.team2_set1
    , team2_set2 = this.team2_set2
    , team2_set3 = this.team2_set3                                
    , tennis_update = null
    , team1_sets = this.team1_sets
    , team2_sets = this.team2_sets
    ;
   
    if ($.isNumeric(team1_set1) === false)
      team1_set1 = '0';
    if ($.isNumeric(team2_set1) === false)
      team2_set1 = '0';

    var sets_update = team1_set1 + '/' + team2_set1;
    var score = team1_sets + '/' + team2_sets;
     
    

    if (team1_set2 > 0 || team2_set2 > 0) {
    
      if ($.isNumeric(team1_set2) === false)
        team1_set2 = '0';
      if ($.isNumeric(team2_set2) === false)
        team2_set2 = '0';

      sets_update += ";" + team1_set2 + '/' + team2_set2;
    }
    if (team1_set3 > 0 || team2_set3 > 0) {

      if ($.isNumeric(team1_set3) === false)
        team1_set3 = '0';
      if ($.isNumeric(team2_set3) === false)
        team2_set3 = '0';

      sets_update += ";" + team1_set3 + '/' + team2_set3;
    }
          

	/* MAJ cache */
    var setsCache = this.DB.readJSON("sets");
    if (setsCache !== undefined)
    {
      setsCache.push([sets_update,score]);
      this.DB.saveJSON("sets", setsCache);
    }
    else {
      this.DB.saveJSON("sets", [[sets_update,score]]);
      	         
	}          
          
    /* regle de gestion */
    // add diff de 2 max si superieur à 6
    // add force score if diff de 2 ou on peut mettre à jour les scores ? on controle si 0,1,2,3
     var total_sets = parseInt(this.team1_sets) + parseInt(this.team2_sets);    
     var diff_sets1 = Math.abs(parseInt(team1_set1)-parseInt(team2_set1));
     var diff_sets2 = Math.abs(parseInt(team1_set2)-parseInt(team2_set2));
     var diff_sets3 = Math.abs(parseInt(team1_set3)-parseInt(team2_set3));
              	
	if ( 
		 total_sets > 3		
		 || (team1_set1>=7 && diff_sets1>2)
		 || (team2_set1>=7 && diff_sets1>2)		 
		 || (team1_set2>=7 && diff_sets2>2)
		 || (team2_set2>=7 && diff_sets2>2)		
		 || (team1_set3>=7 && diff_sets3>2)
		 || (team2_set3>=7 && diff_sets3>2)				 		 
		 ) {    

    	  //On remet à jour
    	  this.renderScoreBoard(this.game);
    	  return;
    }    

	if (this.senderTimeout) {
	  window.clearTimeout(this.senderTimeout);
	  this.senderTimeout = null;
	}
	
	this.senderTimeout = setTimeout(_.bind(this.sendUpdater, this), 1500);
	
	

   },


  sendUpdater : function() {
    var gameid = this.gameid
    , team1_set1 = this.team1_set1
    , team1_set2 = this.team1_set2
    , team1_set3 = this.team1_set3
    , team2_set1 = this.team2_set1
    , team2_set2 = this.team2_set2
    , team2_set3 = this.team2_set3                                
    , tennis_update = null
    , team1_sets = this.team1_sets
    , team2_sets = this.team2_sets
    ;
    


    if ($.isNumeric(team1_set1) === false)
      team1_set1 = '0';
    if ($.isNumeric(team2_set1) === false)
      team2_set1 = '0';

    var sets_update = team1_set1 + '/' + team2_set1;
    var score = this.calculScore();
      

    if (team1_set2 > 0 || team2_set2 > 0) {
    
      if ($.isNumeric(team1_set2) === false)
        team1_set2 = '0';
      if ($.isNumeric(team2_set2) === false)
        team2_set2 = '0';

      sets_update += ";" + team1_set2 + '/' + team2_set2;
      
      
      
    }
    if (team1_set3 > 0 || team2_set3 > 0) {

      if ($.isNumeric(team1_set3) === false)
        team1_set3 = '0';
      if ($.isNumeric(team2_set3) === false)
        team2_set3 = '0';

      sets_update += ";" + team1_set3 + '/' + team2_set3;
    }

    /* controle si possible */
    /* on met "ongoing" sur la class "score" en cours*/
    this.currentScore = sets_update;        

    var game = {
      team1_id : this.game.get('teams')[0].players[0].id
	  , team2_id : this.game.get('teams')[1].players[0].id
      , team1 : this.game.get('teams')[0].players[0].name
	  , team2 : this.game.get('teams')[1].players[0].name	  
	  , id : this.gameid 			      
	  , playerid : this.playerid
	  , token : this.token			      			      			      
	  , country : this.game.get('location').country	      
	  , city : this.game.get('location').city
	  , court : this.game.get('infos').court
	  , surface : this.game.get('infos').surface
	  , tour : this.game.get('infos').tour
	  , subtype : this.game.get('infos').subtype			      
	  , sets : sets_update
	  , score : score
    };
     
    var that = this;
      
    this.game = new GameModel(game);
    this.game.save({}, {success: function(model, response){ 
      that.game = model;
      
    }}); 
  },

  // renderRefresh : refresh only scoreboard
  renderRefresh : function() {
     
    $(this.displayViewScoreBoard).html(this.templates.game({
      game : this.game.toJSON(),
      owner : this.owner.toJSON(),
      follow : this.follow
    }));
     
    return false;
  },
  
  renderCountComment : function() {
	  var nbComments = this.streams.length;
	  
      
    if (nbComments > Y.Conf.get("game.max.comments") )
      this.$(".link-comments").html(i18n.t('game.50lastcomments'));
    else if (nbComments == 1)
      this.$(".link-comments").html(i18n.t('game.1comment'));
    else if (nbComments > 0)
      this.$(".link-comments").html(nbComments + " "+i18n.t('game.comments'));
    else
      this.$(".link-comments").html(i18n.t('game.0comment'));
  },

  refreshTimer : function() {
    var dateEnd = new Date();
    //var dateStart = new Date(this.dateStart);
    var dateStart = Date.fromString(this.dateStart);
          	
    timer = dateEnd - dateStart;
          
    if (timer>0)
    {     
	    var dateTimer = new Date(0, 0, 0, 0, 0, 0, timer);         
	    timer = ('0'+dateTimer.getHours()).slice(-2)+':'+('0'+dateTimer.getMinutes()).slice(-2);       
	    $('.timer').html(timer); 
    }      
  },		

  render : function() {

    var game = this.game;
    
    console.log('render game',game);

    //si premiere init, on stock le score en cours
    if (this.init === true) {
	    if (game.get('owner') !== "") {	          
      
	      if (game.get('infos').sets !== undefined) {
	          
	        this.statusScore = game.get('status');      

	        var sets = game.get('infos').sets;
	        var score = game.get('infos').score;
	           
	        if (sets!=="") {	    
		        this.currentScore = game.get('infos').sets;  
	        }
	        else {	    
		        this.currentScore = "0/0";  	         
	        }
	        
		    var setsCache = this.DB.readJSON("sets");
		    if (setsCache !== undefined)
		    {
		      setsCache.push([sets,score]);
		      this.DB.saveJSON("sets", setsCache);  
		    }
		    else {
		      this.DB.saveJSON("sets", [[sets,score]]);		      	         
			}
	        
	        
	        this.init = false;
	      }
	      
	      this.gameid = game.id;

	     
	    }
	    
	    
    }
        
    var timer = '';
        
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
 	  var score = this.calculScore();
 	  var scoreboard = score.split('/'); 
 	  $('#team1_sets_div').html('<div class="score sets">'+scoreboard[0]+'</div>');
 	  $('#team2_sets_div').html('<div class="score sets">'+scoreboard[1]+'</div>');            
        
    }
    else if ( game.get('status') === "ongoing" ) {
        
      //comment connaitre la date actuelle par rapport au serveur ?
      var dateEnd = new Date();
      //var dateStart = new Date(game.get('dates').start);
      var dateStart = Date.fromString(game.get('dates').start);
       	
      timer = dateEnd - dateStart;
      
      //console.log('timer',timer);
          
      if (timer>0)
      {
          
	    var dateTimer = new Date(0, 0, 0, 0, 0, 0, timer);         
	    timer = ('0'+dateTimer.getHours()).slice(-2)+':'+('0'+dateTimer.getMinutes()).slice(-2);        
      }
      else {
        timer = '00:00';  
    
      }
      
  
          
    }
                
    // FIXME: refresh only input and id
    
    this.$el.html(this.templates.game({
      game : game.toJSON(),
      timer : timer,
      playerid : this.playerid,      
      follow : this.follow
    }));


    /* css transition: performance issues: disabled
    var $buttonCommentaires = this.$(".button-commentaires");
    setTimeout(function () {
      $buttonCommentaires.css("height", "87px");
    }, 100);
    */
    
	this.renderScoreBoard(game);

    //i18n
    //PERF:on remplace que les champs du DOM concern�
    $('a').i18n();
    $('span').i18n();    
    //this.$el.i18n();

    return this;
  },

  renderScoreBoard : function(game) {
  
	  if (game.get('infos').score !== null ) { 
	    if(game.get('infos').score.indexOf('/')!=-1) { 
	      var scoreboard = game.get('infos').score.split('/'); 
	      this.team1_sets = scoreboard[0]; 
	      this.team2_sets = scoreboard[1]; 
	      } 
	  } 
	  
	  
	  
	  if (game.get('infos').sets !== null ) { 
	    if (game.get('infos').sets.indexOf(';')!=-1) { 
	      var scoreboard = game.get('infos').sets.split(';'); 
	    
	      if (scoreboard.length==2 ||scoreboard.length==3) { 
	        var scoreboard1 = scoreboard[0].split('/');
	        this.team1_set1 = scoreboard1[0]; 
	        this.team2_set1 = scoreboard1[1]; 
	        var scoreboard2 = scoreboard[1].split('/'); 
	        this.team1_set2 = scoreboard2[0]; 
	        this.team2_set2 = scoreboard2[1]; 
	        this.set_current=2; 
	        
	      } 
	    
	      if (scoreboard.length==3) { 
	        var scoreboard3 = scoreboard[2].split('/'); 
	        this.team1_set3 = scoreboard3[0]; 
	        this.team2_set3 = scoreboard3[1]; 
	        this.set_current=3; 
	      }
	      else {
	        this.team1_set3 = "&nbsp;";
	        this.team2_set3 = "&nbsp;";		      
	      } 
	    } 
	    // 1 set 
	    else { 
	      if (game.get('infos').sets.indexOf('/')!=-1) { 
	        var scoreboard1 = game.get('infos').sets.split('/'); 
	        this.team1_set1 = scoreboard1[0]; 
	        this.team2_set1 = scoreboard1[1]; 
	        this.team1_set2 = "&nbsp;";
	        this.team2_set2 = "&nbsp;";
	        this.team1_set3 = "&nbsp;";
	        this.team2_set3 = "&nbsp;";	        	        
	      } 
	    } 
	  }        
	

	
	
    $(this.displayViewScoreBoard).html(this.templates.scoreboard({
      game : game.toJSON(),
  	  team1_set1 : this.team1_set1
  	  , team1_set2 : this.team1_set2
      , team1_set3 : this.team1_set3
      , team2_set1 : this.team2_set1
      , team2_set2 : this.team2_set2
      , team2_set3 : this.team2_set3
      , team1_sets : this.team1_sets
      , team2_sets : this.team2_sets      
    }));
		

    //this.renderCountComment();
    this.streams.once("sync", this.renderCountComment, this);
    this.streams.fetch();

    //i18n
    //PERF:on remplace que les champs du DOM concernés
    $('a').i18n();
    $('span').i18n();    
    //this.$el.i18n();
    
    
	var total_sets = parseInt(this.team1_sets) + parseInt(this.team2_sets);
      
       
    if (total_sets >= 2)  {

	      $('#team1_set1_div .score').removeClass('ongoing');	
	      $('#team2_set1_div .score').removeClass('ongoing');	
		  $('#team1_set2_div .score').removeClass('ongoing');
		  $('#team2_set2_div .score').removeClass('ongoing');		  
		  $('#team3_set3_div .score').addClass('ongoing');
		  $('#team3_set3_div .score').addClass('ongoing');	
    }             
    else if (total_sets === 1)  {
   
	      $('#team1_set1_div .score').removeClass('ongoing');	
	      $('#team2_set1_div .score').removeClass('ongoing');	
		  $('#team1_set2_div .score').addClass('ongoing');
		  $('#team2_set2_div .score').addClass('ongoing');		  
		  $('#team3_set3_div .score').removeClass('ongoing');
		  $('#team3_set3_div .score').removeClass('ongoing');
    }
    else {
    
	      $('#team1_set1_div .score').addClass('ongoing');	
	      $('#team2_set1_div .score').addClass('ongoing');	
		  $('#team1_set2_div .score').removeClass('ongoing');
		  $('#team2_set2_div .score').removeClass('ongoing');		  
		  $('#team3_set3_div .score').removeClass('ongoing');
		  $('#team3_set3_div .score').removeClass('ongoing');              
    } 
    
    
    
	var startTeam = game.get('infos').startTeam;
	
	if ( whoServe(game.get('infos').sets,startTeam) === startTeam ) {
	  if (game.get('teams')[0].id === startTeam) 
	  {
		$('.server1').addClass('server-ball');
		$('.server2').removeClass('server-ball');
		this.server1=true;
		this.server2=false;		
	  }
	  else {
		$('.server1').removeClass('server-ball');
		$('.server2').addClass('server-ball');		
		this.server1=false;
		this.server2=true;				  
	  }
	}
	else {
	  if (game.get('teams')[0].id === startTeam) 
	  {
		$('.server1').removeClass('server-ball');
		$('.server2').addClass('server-ball');		
		this.server1=false;
		this.server2=true;			
	  }
	  else {
		$('.server1').addClass('server-ball');
		$('.server2').removeClass('server-ball');	
		this.server1=true;
		this.server2=false;				  
	  }
	}
	
    return this;
  },

    
  calculScore : function() { 
  
     var sets1 = 0;
     var sets2 = 0;
     
     var diff_sets1 = Math.abs(parseInt(this.team1_set1)-parseInt(this.team2_set1));
     var diff_sets2 = Math.abs(parseInt(this.team1_set2)-parseInt(this.team2_set2));
     var diff_sets3 = Math.abs(parseInt(this.team1_set3)-parseInt(this.team2_set3));
              	
		/*
		 || (team1_set1>=7 && diff_sets1>2)
		 || (team2_set1>=7 && diff_sets1>2)		 
		 || (team1_set2>=7 && diff_sets2>2)
		 || (team2_set2>=7 && diff_sets2>2)		
		 || (team1_set3>=7 && diff_sets3>2)
		 || (team2_set3>=7 && diff_sets3>2)				 		 
		*/
	
	/*	
	 console.log('team1_set1',this.team1_set1);	
	 console.log('team2_set1',this.team2_set1);	 
	 
	 console.log('team1_set2',this.team1_set2);	 
	 console.log('team2_set2',this.team2_set2);

	 console.log('team1_set3',this.team1_set3);
	 console.log('team2_set3',this.team2_set3);	 
	 */	 	 	 	 	
     
  	 if ( this.team1_set1 < this.team2_set1 && this.team2_set1>=6 && ( this.team2_set2>0 || this.team1_set2>0 )) {
  	   sets2++;
  	   //console.log('mode 1');
  	 }
  	 else if (this.team1_set1 > this.team2_set1 && this.team1_set1>=6 && ( this.team2_set2>0 || this.team1_set2>0 ) ) {
  	   sets1++;
  	   //console.log('mode 2');
  	 }

  	 if (this.team1_set2 < this.team2_set2 && this.team2_set2>=6 && ( this.team2_set3>0 || this.team1_set3>0 )) {
  	   sets2++;
  	   //console.log('mode 3');
  	 }
  	 else if (this.team1_set2 > this.team2_set2 && this.team1_set2>=6 && ( this.team2_set3>0 || this.team1_set3>0 )) {
  	   sets1++;
  	   //console.log('mode 4');
  	 }
  	   
  	 if (this.team1_set3 < this.team2_set3 && this.team2_set3>=6 && this.statusScore==="finished") {	       
       sets2++;
       //console.log('mode 5');
     }
     else if (this.team1_set3 > this.team2_set3 && this.team1_set3>=6 && this.statusScore==="finished") {
       sets1++;
       //console.log('mode 6');
     }
       
    return sets1+"/"+sets2;     
  
  },

  restartGame : function() {  
  
    var game = {
	    team1_id : this.game.get('teams')[0].players[0].id
	    , team2_id : this.game.get('teams')[1].players[0].id	      
	    , playerid : this.playerid
	    , token : this.token
	    , id : this.gameid 
    };  
  
	if ( this.statusScore === "finished"  ) {
      game.status = "ongoing";    	 
      //On met à jour les sets 
     this.statusScore = "ongoing";  
     game.score = this.calculScore();      
                
      var tennis_update = new GameModel(game);
      
      var that = this;
	    tennis_update.save({}, {
        success: function(model, response){
	        
            $("#statusButton").html(i18n.t('game.finish'));
            
            // statusRestart to optionButton
            $("#statusRestart").attr("id","optionButton");
 			$("#optionButton").html(i18n.t('game.options'));
            
            // On efface la cache
            if (this.DB!==undefined)
              this.DB.remove("sets");
             
          }
	    });
	    
	    
    }    	
  
  },
  
  startTeam1 : function() {

    var game = {
    	startTeam : 0 
	    , team1_id : this.game.get('teams')[0].players[0].id
	    , team2_id : this.game.get('teams')[1].players[0].id	      
	    , playerid : this.playerid
	    , token : this.token
	    , id : this.gameid 
    };
    
	var that = this;
	
	var tennis_update = new GameModel(game);
	tennis_update.save({}, {
      success: function(model, response){      
	      //on cache le barre
	      $('.serverbar').hide();
		  $('.server1').addClass('server-ball');
		  $('.server2').removeClass('server-ball');			  		
		  this.server1=false;
		  this.server2=true;		      
      }
	});      
  
  },
  
  startTeam2 : function() {
  
    var game = {
    	startTeam : 1     	
	    , team1_id : this.game.get('teams')[0].players[0].id
	    , team2_id : this.game.get('teams')[1].players[0].id	      
	    , playerid : this.playerid
	    , token : this.token
	    , id : this.gameid 
    };
    
	var that = this;
	
	var tennis_update = new GameModel(game);
	tennis_update.save({}, {
      success: function(model, response){
	      //on cache le barre
	      $('.serverbar').hide();	 
		  $('.server1').removeClass('server-ball');
		  $('.server2').addClass('server-ball');
		  this.server1=true;
		  this.server2=false;	           
      }
	});      
  
  },  

  statusGame : function() {    


    var game = {
	    team1_id : this.game.get('teams')[0].players[0].id
	    , team2_id : this.game.get('teams')[1].players[0].id	      
	    , playerid : this.playerid
	    , token : this.token
	    , id : this.gameid 
    };
    	


    if ( this.statusScore === "created"  ) {
      game.status = "ongoing";    	          
      var tennis_update = new GameModel(game);
      var that = this;
	    tennis_update.save({}, {
        success: function(model, response){
	        console.log('success ');
          $("#statusButton").html(i18n.t('game.finish'));
          that.statusScore = "ongoing";	      
        }
	    });
    }
    else if ( this.statusScore === "ongoing"  ) {
      game.status = "finished";    	 
      //On met à jour les sets 
     this.statusScore = "finished";  
     game.score = this.calculScore();      
      
      var tennis_update = new GameModel(game);
      
      var that = this;
	    tennis_update.save({}, {
        success: function(model, response){
	        	        
            $("#statusButton").html(i18n.t('game.finished'));	 
         
            $("#optionButton").attr("id","statusRestart");
 			$("#statusRestart").html(i18n.t('game.restart'));
 			
 			//On met à jour le score
 			var score = that.calculScore();
 			
	        var scoreboard = score.split('/'); 
 			$('#team1_sets_div').html('<div class="score sets">'+scoreboard[0]+'</div>');
 			$('#team2_sets_div').html('<div class="score sets">'+scoreboard[1]+'</div>');
 			      
            // On efface la cache
            if (this.DB!==undefined)
              this.DB.remove("sets");
             
          }
	    });
	    
	    
    }   
  },      

      
  optionGame : function() {

    Y.Router.navigate("/games/form/"+this.id,{trigger:true});
    
  },      

  followGame : function() {

    if (this.follow === 'true') {

      var games_follow = Y.Conf.get("owner.games.followed");
      if (games_follow !== undefined)
      {
        if (games_follow.indexOf(this.id) !== -1) {
          //On retire l'elmt
          games_follow.splice(games_follow.indexOf(this.id), 1);
          Y.Conf.set("owner.games.followed", games_follow, { permanent: true });
        }
      }
          
      $("#followButton").text(i18n.t('message.follow'));

      this.follow = 'false';

    } else {
        
      //Via localStorage
      var games_follow = Y.Conf.get("owner.games.followed");
      if (games_follow !== undefined)
      {
        if (games_follow.indexOf(this.id) === -1) {
          games_follow.push(this.id);
          Y.Conf.set("owner.games.followed", games_follow, { permanent: true });
        }
      }
      else
        Y.Conf.set("owner.games.followed", [this.id]);

      $("#followButton").text(i18n.t('message.nofollow'));

      this.follow = 'true';

    }

  },



  onClose : function() {
    // Clean
    this.undelegateEvents();
    
     if (this.senderTimeout) {
       window.clearTimeout(this.senderTimeout);
       this.sendUpdater();
       this.senderTimeout = null;
     }

     if (this.undoTimeout) {
       window.clearTimeout(this.undoTimeout);
       this.undoTimeout = null;
     }
      
    // desabonnements
    this.game.off("sync", this.render, this);
    this.streams.off("sync",this.renderCountComment, this);
    //
    if (this.shareTimeout) {
      window.clearTimeout(this.shareTimeout);
      this.shareTimeout = null;
    }
    // 
    this.poller.stop();
        
  }
});