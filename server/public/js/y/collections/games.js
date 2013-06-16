var GamesCollection = Backbone.Collection.extend({
  	 
	model:GameModel, 
	
	searchOption:[],
	//searchOptionParam:'',	
	sortOption:'',
	query:'',
	pos: null,
	club:'',
	
	initialize: function (param) {	
		this.changeSort("city");		
	},
	
		  
  url:function() {
       
    var url='';

    if (this.searchOption.indexOf('me') !== -1) {      
      // /v1/players/:id/games/  <=> cette url liste tous les matchs dans lequel un player joue / a jou�
	    // /v1/players/:id/games/?owned=true <=> cette url liste tous les matchs qu'un player poss�de (qu'il a cr��)
      url = Y.Conf.get("api.url.players") + this.query + "/games/?owned=true";
    }
    else 
      url =  Y.Conf.get("api.url.games");
      
    if (url === Y.Conf.get("api.url.games") ) 
    	url += "?";
    else
    	url += "&";      
    
    if (this.searchOption.indexOf('club') !== -1 && this.club!=='') {
      url += "club=" + this.club; 
      url += "&"; 
    }
      
    if (url === Y.Conf.get("api.url.games")  ) 
    	url += "?";
   
        
    if (this.searchOption.indexOf('geo') !== -1 && this.pos !==null) { 
     if (this.pos[1]!==null && this.pos[0]!==null)   
      url +=  "distance=50&latitude="+this.pos[1]+"&longitude="+this.pos[0];
      url += "&";
    }        

    if (url === Y.Conf.get("api.url.games") ) 
    	url += "?";
           	
    	
	if (this.query!=="" && this.searchOption.indexOf('player') !== -1 ) {
		url +="q="+this.query+"";
		url += "&";
	};
    
    if (url === Y.Conf.get("api.url.games") ) 
    	url += "?";
    	    
    if (this.sortOption==='ongoing')
      url += "status=ongoing&";
    else if (this.sortOption==='finished')
      url += "status=finished&";
    else if (this.sortOption==='created')
      url += "status=created&";
           
	
	url += "sort=-dates.start&limit=10";   

    console.log('URL',url);        
        
    return url;
  },

  setSort:function(s) {  	
    this.sortOption=s;
  },
  
  removeSearch:function(m) {

     if (this.searchOption!==undefined) {      	  
        if (this.searchOption.indexOf(m) !== -1) {
          this.searchOption.splice(this.searchOption.indexOf(m), 1);
        }
     }
  
  },
  
  addSearch:function(m) {
    //this.searchOption=m;
    
     if (this.searchOption!==undefined) {      	  
        if (this.searchOption.indexOf(m) === -1) {
           this.searchOption.push(m);      
       }        
      }
      else {
         this.searchOption = [m];
      }   
      
      console.log('on passe setSearch sur ',this.searchOption);  

    //if (typeof q !== "undefined")
    //  this.searchOptionParam=q;
  },

  setQuery:function (q) {
    this.query=q;
  },

  
  
  setPos:function(pos) {
    this.pos = pos;
  },  
  
  setClub:function(club) {
    this.club = club;
  }, 	
    
  comparator: function (property) {
    return selectedStrategy.apply(Game.get(property));
  },
    
  strategies: {
      city: function (item) { return [item.get("city")]; }, 
      status: function (item) { return [item.get("status")]; },
      player: function (item) { return [item.get("teams[0].players[0].name"),item.get("teams[1].players[0].name")]; },
  },
    
  changeSort: function (sortProperty) {
      this.comparator = this.strategies[sortProperty];
  }
});

