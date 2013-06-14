Y.Views.PlayerFollow = Y.View.extend({
  el:"#content",
  
  events: {
    "blur input#search-basic": "search",
    "click li": "choosePlayer"    
  },

  listview:"#listPlayersView",  
  
  pageName: "playerFollow",
  pageHash : "players/follow",

  initialize:function() {

	//header      
    Y.GUI.header.title(i18n.t('playerfollow.title'));    

    // loading templates.
    this.templates = {
      playerlist:  Y.Templates.get('playerList'),
      playersearch: Y.Templates.get('playerListSearch'),
      error: Y.Templates.get('error'),
      ongoing: Y.Templates.get('ongoing')
    };
    

    this.render();		
       
    var players = Y.Conf.get("owner.players.followed");

    if (players!==undefined) {
    	this.playerLast = players[players.length-1];
	    this.collection = new PlayersCollection();	
	    var that = this;	
	    var i = players.length;	
	    
        if (players.length<1) {
	      $(this.listview).html(this.templates.playerlist({players:[],query:' '}));
	      $('p.message').i18n();		          
        }	    
	    
		this.syncPlayer = function (player) {
	      
	      that.collection.add(player);
	      i--;
          //si dernier element du tableau
          if (that.playerLast === player.get('id')) {
	        $(that.listview).html(that.templates.playerlist({players:that.collection.toJSON(),query:' '}));  	
	      }
	          			
		};	    
	    
	    this.players = [];
	    
	    players.forEach(function (playerid,index) {	
			var player = new PlayerModel({id : playerid});	        
	        player.once("sync", this.syncPlayer, this);
	        
	        player.fetch().error(function (xhrResult, error) {	        

	        	if (players.indexOf(playerid) !== -1) {
		          players.splice(players.indexOf(playerid), 1);
		          Y.Conf.set("owner.players.followed", players, { permanent: true });
		          
		          if (players.length<1) {
				   $(that.listview).html(that.templates.playerlist({players:[],query:' '}));
				   $('p.message').i18n();		          
		          }
		          else
		            this.playerLast = players[players.length-1];
		            
		          }
   
		    });	        
	        
	        
	        this.players[index] = player;	
	        				
	    },this);
	 }
	 else {	 
	   $(this.listview).html(this.templates.playerlist({players:[],query:' '}));
	   $('p.message').i18n();
	 }
     
  },
  
  choosePlayer : function(elmt) { 
    if (elmt.currentTarget.id) {
      var route = elmt.currentTarget.id;
      Y.Router.navigate(route, {trigger: true}); 
    }	
  },  
  
  search:function() {
    var q = $("#search-basic").val();
    $(this.listview).html(this.templates.error()); 
    this.players = new PlayersCollection();   	  
    this.players.setMode('search',q);
    this.players.fetch().done($.proxy(function () { 
      
      //$(this.listview).html(this.templates.playerlist({players:this.playersfollow.toJSON(), query:q}));
      if (this.players.toJSON().length === 0) {
        $(this.listview).html(this.templates.error());
      }
      else
        $(this.listview).html(this.templates.playerlist({ players: this.players.toJSON(), query: q }));
    	
      $(this.listview).i18n();
            
      
    }, this));
    
    return this;
  },

  //render the content into div of view
  render: function(){
    this.$el.html(this.templates.playersearch({}));
	$('a').i18n(); 
	return this;
  },

  renderList: function(query) {
    $(this.listview).html(this.templates.playerlist({players:this.collection.toJSON(), query:' '}));

    return this;
  },

  onClose: function(){
    this.undelegateEvents();

	if (this.players!==undefined) {
		this.players.forEach(function (player) {
		   player.off("sync", this.syncPlayer, this);
		}, this);
	}
  }
});