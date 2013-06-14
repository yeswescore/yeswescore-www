Y.Views.PlayerForm = Y.View.extend({
  el:"#content",
    
  events: {
    'click #savePlayer':'add',
    'keyup #club': 'updateList',
    'click #club_choice' : 'displayClub'
  },
  
  listview:"#suggestions",

  pageName: "playerForm",
  pageHash : "players/form",  
    
  clubs:null,
  useSearch:0,	     
  mode:'',
  shareTimeout: null,    

  myinitialize:function(obj) {
  
    this.player = null;  
    this.useSearch = 0;	
    
    this.mode = obj.mode;
          
	//header
    Y.GUI.header.title(i18n.t('playerform.title')); 
  
    // loading templates.
    this.templates = {
      layout: Y.Templates.get('empty'),
      playerform:  Y.Templates.get('playerForm'),
      clublist: Y.Templates.get('clubListAutoComplete')
    };
       
    this.owner = Y.User.getPlayer();    
    this.token = this.owner.get('token');
    this.playerid = this.owner.get('id');
    this.clubid = this.owner.get('club').id;
    
    
    // we render immediatly
    this.render();    
    
    this.player = new PlayerModel({id : this.owner.id});
    this.player.once("sync", this.renderPlayer, this);	
    this.player.fetch();
     	

  },
  
  autocompleteClubs: function (input, callback) {
  
    if (input.indexOf('  ')!==-1 || input.length<= 1 )
      callback('empty');		
    
    Backbone.ajax({
      url: Y.Conf.get("api.url.autocomplete.clubs"),
      type: 'GET',
      dataType : 'json',
      data: { q: input }
    }).done(function (clubs) {
      if (clubs && _.isArray(clubs) && clubs.length>0) {
        callback(null, clubs.splice(0, 3).map(function (p) { p.text = p.name; return p; }));
      } else {
        callback(null, []);
      }
    }).fail(function (xhr, error) { 
      callback(error);
    });

  },

  autocompleteChoose: function (data) {

    if (data && data.name) {
      this.$("#club").val(data.name);
      this.clubid = data.id; 
      

           
      this.$('club_error').html('');      
    }
  },
    
  /*  
  
  displayClub: function(li) {
    selectedId = $('#club_choice:checked').val();
    selectedName = $('#club_choice:checked').next('label').text();
    	
    $('#club').val(selectedName);
    //FIXME : differencier idclub et fftid
    $('#clubid').val(selectedId); 
    $('club_error').html('');
    	
   
    	
    $(this.listview).html('');
  },  
  
  updateList: function (event) {
    var q = $("#club").val();
   	
    this.clubs = new ClubsCollection();
    this.clubs.setMode('search',q);
    if (q.length>2) {
      this.useSearch=1;
      this.clubs.fetch();
      this.clubs.on( 'sync', this.renderList, this );
    }

  },
  
  */
  
  render: function () {
    // empty page.
	  this.$el.html(this.templates.layout());
	  return this;
  },
  
    
  renderList: function () {
    var q = $("#club").val();  	
  	
	$(this.listview).html(this.templates.clublist({clubs:this.clubs.toJSON(), query:q}));
	

	

  },
    
    
      
  add: function (event) {
  
    //$.ui.toggleNavMenu(true);
  
    var name = $('#name').val()
      , password = $('#password').val().replace(/ /g, "")
      , email = $('#email').val().replace(/ /g, "")
      , rank = $('#rank').val().replace(/ /g, "")
      , playerid = this.playerid
      , token = this.token
      , club = $('#club').val()
      , clubid = this.clubid
      , idlicence = $('#idlicence').val()
      , player = null;
      
    //On cache toutes les erreurs 
    $("span[class*='_error']").hide();
    $("span.success").hide();
          
    if (checkEmail(email) && email.length>0) {
	  $('span.email_error').html(i18n.t('message.bad_mail')+' !').show();
      $('#email').val('');        
      return false;	   
    };

    if (checkRank(rank) && rank.length>0) {
	  $('span.rank_error').html(i18n.t('message.bad_rank')+' !').show();
      $('#rank').val('');        
      return false;	   
    };
           
    if (checkPassword(password) && password.length>0) {
	  $('span.password_error').html(i18n.t('message.bad_password')+' !').show();
      $('#password').val('');        
      return false;	   
    };
    
    if (name.length==0) {
	  $('span.name_error').html(i18n.t('message.empty_name')+' !').show();      
      return false;	   
    };
    
    
    if (checkName(name) && name.length>0) {
	  $('span.name_error').html(i18n.t('message.bad_name')+' !').show();
      $('#name').val('');        
      return false;	   
    };

    if (checkLicence(idlicence) && idlicence.length>0) {
	  $('span.idlicence_error').html(i18n.t('message.bad_licence')+' !').show();
      $('#idlicence').val('');        
      return false;	   
    };

    if (checkName(club) && club.length>0) {
	  $('span.club_error').html(i18n.t('message.bad_name')+' !').show();
      $('#club').val('');        
      return false;	   
    };
        
    var player = new PlayerModel({
        name: name
      , password: password
      , email: email
      , rank: rank                  	
      , playerid: playerid
      , idlicence:idlicence
      , token: token
      , club: club
      , clubid:clubid            
    });

	//FIXME :  add control error
    var that = this;
    player.save().done(function (result) {
      
        $('span.success').css({display:"block"});
      	$('span.success').html(i18n.t('message.updateok')).show();
		$('span.success').i18n();
		

		Y.User.setPlayer(new PlayerModel(result));
		
		if (that.mode === 'first') {
		  Y.Router.navigate("games/add", {trigger: true});	   
		}
		else {
		   that.shareTimeout = window.setTimeout(function () {
	      		Y.Router.navigate("account", {trigger: true});
	      		that.shareTimeout = null;
	    	}, 2000);	
    	}	
      
    });
   
    return false;
  },     
    

  //render the content into div of view
  renderPlayer: function(){
    	
    player = this.player.toJSON();
        
    var dataDisplay = {
	      name:player.name
	    , rank:player.rank
	    , password:player.password
	    , idlicence:player.idlicense
	    , playerid:this.playerid
	    , token:this.token
    };
      
    if (player.club!== undefined) {    
      dataDisplay.club = player.club.name;
      dataDisplay.idclub = player.club.id;      	
    }
    
    if (player.email!== undefined) {    
      dataDisplay.email = player.email.address;    
    }
    else 
      dataDisplay.email = '';
    

    this.$el.html(this.templates.playerform({data : dataDisplay}));
    
    if (this.mode === 'first') {
		$('#form_firstconnection').hide();
	}
	else {
		$('#intro_firstconnection').hide();
	}

	this.$el.i18n();

    return this;
  },

  onClose: function(){
    this.undelegateEvents();
    
    this.player.off("sync", this.renderPlayer, this);	
    if (this.useSearch===1) this.clubs.off( "sync", this.renderList, this );
    
     if (this.shareTimeout) {
      window.clearTimeout(this.shareTimeout);
      this.shareTimeout = null;
    }    
  }
});