Y.Views.GameAdd = Y.View.extend({
  el: "#content",

  events: {
    'click #addGame': 'addGame',
    'click .form-button.other-team': 'otherTeam',
    'click .form-button.more-options': 'moreOption',
    'blur #team1': 'changeTeam1'
  },

  pageName: "gameAdd",
  pageHash : "games/add",  

  listview1: "#team1_suggestions",
  listview2: "#team2_suggestions",
  playerid: "",
  token: "",
  
  useSearch:0,

  myinitialize: function () {
    this.useSearch = 0;	
    Y.GUI.header.title(i18n.t('gameadd.title'));
  	this.templates = {
	    gameadd:  Y.Templates.get('gameAdd'),
	    gameselect:  Y.Templates.get('gameSelect'),	    
	    gameinput:  Y.Templates.get('gameInput'),	      
	    playerlist: Y.Templates.get('playerListAutoComplete')
	  };
	this.owner = Y.User.getPlayer();    
    this.token = this.owner.get('token');
    this.playerid = this.owner.get('id');
	
	this.DB = new Y.DB("Y.GameAdd.");
		
	this.render();
  },

  otherTeam: function () {
    $('span.team1_error').hide();
    $('span.team2_error').hide();
    
    $(".form-button.other-team").addClass("selected");
    $(".ui-grid-b.first-team").removeClass("me");
    $("#team1").prop("disabled", false);
    $("#team1_id").val('');
    $("#team1").attr("placeholder", "");
    $("#team1").val('');
    // on force l'input mode
    $("#team1").focus();
    this.$("#team1").trigger("click");
  },

  moreOption: function () {
  
    $('span.team1_error').hide();
    $('span.team2_error').hide();  
  
    $(".form-button.more-options").toggleClass("selected");
    $("#gameAddForm").toggleClass("simple");
  },
    
  changeTeam1: function () {
    if ($("#team1").val() === "") {
      $(".form-button.other-team").removeClass("selected");
      $(".ui-grid-b.first-team").addClass("me");
      $("#team1").prop("disabled", true);
      //$("#team1").attr("placeholder", i18n.t("gameadd.player1_holder"));
      if (this.owner.get('name').length>1) $("#team1").val(this.owner.get('name'));
      $("#team1_id").val(this.owner.get('id'));
    }
  },

  addGame: function (event) {
  
    var team1 = $('#team1').val()    
      , team1_id = $('#team1_id').val()
      , team2 = $('#team2').val()
      , rank2 = $('#rank2').val()
      , city = $('#city').val()
      , team2_id = $('#team2_id').val();

    if ( ( team1.length < 3 || team1.indexOf('  ')!==-1 ) && !$('#team1').is(':disabled') ) {
      $('span.team1_error').html(i18n.t('message.error_emptyplayer')+' !').show();
      $('#team1').val('');
      return false;
    }
    
    //On redirige vers le formulaire special
    if ( team1 === ''   && $('#team1').is(':disabled') ) {
      //$('span.team1_error').html(i18n.t('message.error_emptyyou')+' !').show();
            
      //On sauvegarde les infos de la partie
	  var game = {
		team1 : team1
	    , rank1 : $('#rank1').val()
	    , team1_id : team1_id
	    , team2 : team2
	    , rank2 : $('#rank2').val()
	    , team2_id : team2_id
	    , city : city
	    , court : $('#court').val()
	    , surface : $('#surface').val()
	    , tour : $('#tour').val()
	    , subtype : $('#subtype').val()
	    , playerid : this.playerid
	    , token : this.token      
	  };
	  
	  this.DB.saveJSON("game",game);
	         
      Y.Router.navigate("players/form/me", {trigger: true});	  
      return false;
    }    
    

    //return false;
    $("span[class*='_error']").hide();

    if (checkName(team1) && team1.length>0) {     
	  $('span.team1_error').html(i18n.t('message.bad_name')+' !').show();
      $('#team1').val('');        
      return false;	   
    };
    
    if (checkName(team2) && team2.length>0) { 
	  $('span.team2_error').html(i18n.t('message.bad_name')+' !').show();
      $('#team2').val('');        
      return false;	   
    };
    
    if (checkRank(rank2) && rank2.length>0) {
	  $('span.team2_error').html(i18n.t('message.bad_rank')+' !').show();
      $('#rank2').val('');        
      return false;	   
    };    

    if ( ( team2.length < 3  || team2.indexOf('  ')!==-1 ) && team2_id === '' ) {
      $('span.team2_error').html(i18n.t('message.error_emptyplayer')+' !').show();
      $('#team2').val('');
      return false;
    };
    
    if (checkName(city) && city.length>0) {             
	  $('span.city_error').html(i18n.t('message.bad_name')+' !').show();
      $('#city').val('');        
      return false;	   
    };        

    var game = {
		team1 : team1
      , rank1 : $('#rank1').val()
      , team1_id : team1_id
      , team2 : team2
      , rank2 : $('#rank2').val()
      , team2_id : team2_id
      , city : city
      , court : $('#court').val()
      , surface : $('#surface').val()
      , tour : $('#tour').val()
      , subtype : $('#subtype').val()
      , playerid : this.playerid
      , token : this.token      
    };
    
    //On sauve dans Collections
    var game = new GameModel(game);    
    game.save({}, {  
      success: function(model, response){

        Y.Router.navigate('games/'+model.id, {trigger: true});	
	    //Mis par defaut dans mes matchs
        //Y.Conf.set("Y.Cache.Game"+data.id, gameCache.id, { permanent: true })              
      }
  	});   

    return false;
  },

  autocompletePlayers: function (input, callback) {
    
    if (input.indexOf('  ')!==-1 || input.length<= 1 )
      callback('empty');		
    
    Backbone.ajax({
      url: Y.Conf.get("api.url.autocomplete.players"),
      type: 'GET',
      dataType : 'json',
      data: { q: input }
    }).done(function (players) {
      if (players && _.isArray(players) && players.length>0) {
        callback(null, players.splice(0, 3).map(function (p) {
           p.text = p.name; 
           
           //FIXME : add rank
           if (p.club !== undefined) {
	           if (p.club.name !== undefined) {
	             p.text += " ( "+p.club.name+" )";
	           };
	       };
           
           return p; 
         }));
      } else {
        callback(null, []);
      }
    }).fail(function (xhr, error) { 
      callback(error);
    });

    /*setTimeout(function () { 
      callback(null, [{text: "titi"}, {text: String(Math.random())}]);
    }, 3000);*/
  },

  autocompleteTeam1: function (data) {
  
    if (data && data.name) {
      this.$("#team1").val(data.name);
      this.$("#team1_id").val(data.id);
    }
  },

  autocompleteTeam2: function (data) {

    if (data && data.name) {
      this.$("#team2").val(data.name);
      this.$("#team2_id").val(data.id);      
    }
  },

  //render the content into div of view
  render: function () {
    this.$el.html(this.templates.gameadd());
    
    //this.$el.i18n(); 
	 if ( this.owner.get('name') !== "" ) $("#team1").val(this.owner.get('name')); 
	 if ( this.owner.get('id') !== "" ) $("#team1_id").val(this.owner.get('id')); 	
	 
	 /*
	 debug android 2.2 to 2.3.6
	 */
	 var userAgent = navigator.userAgent || navigator.vendor || window.opera;
	 var isGingerbread = /android 2\.3/i.test(userAgent);
	 
	 if (!isGingerbread) {
		 $('#inject-select').prepend(this.templates.gameselect({ 
		    selection : i18n.t('gameadd.selection')
		    , surface : i18n.t('gameadd.surface')
	     })); 
	 }
	 else {
		 $('#inject-select').prepend(this.templates.gameinput()); 	   
	 
	 }
         
    //fill with last data 
    if (this.DB !== undefined) {
    
      var game = this.DB.readJSON("game"); 
      
      if (game!==undefined) {
      
	    $("#team2").val(game.team2); 
	    $("#team2_id").val(game.team2_id); 	       
	    $("#rank2").val(game.rank2);                
	 
	    if (!isGingerbread) {
		    if ( game.city !== "" ) $("#city").val(game.city);    
		    if ( game.surface !== "" ) $("#surface").val(game.surface);
		    if ( game.tour !== "" ) $("#tour").val(game.tour);
		    if ( game.court !== "" ) $("#court").val(game.court);
	    }
	    if ( game.competition !== "" ) $("#competition").val(game.competition);      
     
        this.DB.remove("game"); 
      }
    }
 
    
    $('#content').i18n();
		
    return this;
  },

  onClose: function () {
    //Clean
    this.autocompleteStop();
    this.undelegateEvents();
    if (this.playersTeam1 !== undefined) this.playersTeam1.off("all", this.renderListTeam1, this);
    if (this.playersTeam2 !== undefined) this.playersTeam2.off("all", this.renderListTeam2, this);
  }
});