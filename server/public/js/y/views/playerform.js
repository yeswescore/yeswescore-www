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

  myinitialize:function(obj) { 
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
    
    this.player = Y.User.getPlayer();
    this.clubid = this.player.get('club').id;
    this.player.once("sync", this.renderPlayer, this);	
    this.player.fetch();

    // we render immediatly
    this.render();
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
   	
    this.clubs = new ClubsCollection();108
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
    this.$(".container").addClass(this.mode);
	  return this;
  },
  
  renderList: function () {
    var q = $("#club").val();  	
	  $(this.listview).html(this.templates.clublist({clubs:this.clubs.toJSON(), query:q}));
  },
  
  add: function (event) {
    var name = $('#name').val()
      , rank = $('#rank').val().replace(/ /g, "")
      , playerid = this.playerid
      , token = this.token
      , club = $('#club').val()
      , clubid = this.clubid
      , idlicence = $('#idlicence').val()
      , player = null;
      
    //On cache toutes les erreurs 
    $("div.success").hide();

    if (checkRank(rank) && rank.length>0) {
	    $('.rank_error').html(i18n.t('message.bad_rank')+' !').show();
      $('#rank').val('');        
      return false;	   
    };
    
    if (name.length==0) {
	    $('.name_error').html(i18n.t('message.empty_name')+' !').show();      
      return false;	   
    };
    
    if (checkName(name) && name.length>0) {
	    $('.name_error').html(i18n.t('message.bad_name')+' !').show();
      $('#name').val('');        
      return false;	   
    };

    if (checkLicence(idlicence) && idlicence.length>0) {
	    $('.idlicence_error').html(i18n.t('message.bad_licence')+' !').show();
      $('#idlicence').val('');        
      return false;	   
    };

    if (checkName(club) && club.length>0) {
	    $('.club_error').html(i18n.t('message.bad_name')+' !').show();
      $('#club').val('');        
      return false;	   
    };
    
    var that = this;
    var player = Y.User.getPlayer();
    player.set('name', name);
    player.set('rank', rank);
    player.set('idlicence', idlicence);
    player.set('club', club);
    player.set('clubid', clubid);

	  //FIXME :  add control error
    player.save().done(function (result) {
      $('div.success').css({display:"block"});
      $('div.success').html(i18n.t('message.updateok')).show();
		  $('div.success').i18n();
		  Y.User.setPlayer(new PlayerModel(result));
		  if (that.mode === 'first') {
		    Y.Router.navigate("games/add", {trigger: true});  	   
		  }
		  else if (that.mode === 'search') {
		    Y.Router.navigate("search/form", {trigger: true});  	   
		  }		  
		  else {
		    Y.Router.navigate("account", {trigger: true});
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
	    , idlicence:player.idlicense
	    , playerid:this.playerid
	    , token:this.token
    };
      
    if (player.club!== undefined) {    
      dataDisplay.club = player.club.name;
      dataDisplay.idclub = player.club.id;      	
    }
    
    this.$el.html(this.templates.playerform({data : dataDisplay}));

    this.$(".container").addClass(this.mode);

	  this.$el.i18n();

    return this;
  },

  onClose: function(){
    this.undelegateEvents();
    
    this.player.off("sync", this.renderPlayer, this);	
    if (this.useSearch===1) this.clubs.off( "sync", this.renderList, this );
  }
});