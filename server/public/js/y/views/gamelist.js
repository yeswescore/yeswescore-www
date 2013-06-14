Y.Views.GameList = Y.View.extend({
  el: "#content",

  events: {
    // mode "input"
    "keyup input#search-basic": "searchOnKey",
    "mousedown .button-search": "searchButton",
    "click li": "goToGame",
    //'click .button-option-down': 'showFilters',
    'click .button-option-right': 'showFilters',
    //'click .button-option-up': 'hideFilters',

    
    'click a[data-filter="match-geo"]': 'searchWithGeo',
    'click a[data-filter="match-all"]': 'searchWithAll',    
    'click a[data-filter="match-club"]': 'searchWithClub',
        
    'click a[data-filter="filter-status-all"]': 'filterByStatusAll',
    'click a[data-filter="filter-status-ongoing"]': 'filterByStatusOngoing',    
    'click a[data-filter="filter-status-finished"]': 'filterByStatusFinished',      
    'click a[data-filter="filter-status-created"]': 'filterByStatusCreated'
    
  },

  listview: "#listGamesView",

  pageHash : "games/list",

  sortOption: "",
  searchOption: "",  
  clubid: "",
      
  myinitialize: function (param) {
  	
  	//FIXME: refacto
  	this.sortOption = Y.User.getFiltersSort();
  	this.searchOption = Y.User.getFiltersSearch();
  	this.clubid = Y.User.getClub();
  	
  	
	//header 
    if (param!=='undefined') { 
      if (param.search==="me") {
        Y.GUI.header.title(i18n.t('gamelist.titleyourgames'));
        this.pageName = "gameListByMe";
      }
      else if (param.search==="club") {
        Y.GUI.header.title(i18n.t('gamelist.titleclubsgames')); 
        this.pageName = "gameListByClub";        
      }  
      else {
        Y.GUI.header.title(i18n.t('gamelist.titlegames'));  
        this.pageName = "gameList";
      }  
    }
	else {
	  Y.GUI.header.title(i18n.t('gamelist.titlegames'));
      this.pageName = "gameList";	  
    }
	
    var that = this;
    //  
    
    
    this.templates = {
      gamelist:  Y.Templates.get('gameList'),
      gamesearch: Y.Templates.get('gameListSearch'),
      error: Y.Templates.get('error'),
      ongoing: Y.Templates.get('ongoing')      
    };
    

    //we capture config from bootstrap
    //FIXME: put a timer
    //this.config = new Config();
    //this.config.fetch();

    // we need to do 2 things 
    // - fetch games
    // - read/create the player
    // THEN
    //  render games & player.

    // first: fetch games
    this.gameDeferred = $.Deferred();
    this.games = new GamesCollection();

    if (param!=='undefined') {
    
	    if (param.search !== '') {
	      this.games.setSearch(param.search,param.id);		      
	    }
	    
	    if (param.sort !== '') {
	      this.games.setSort(param.sort);  	  
	    }
	      
     }    
      
            
    this.games.on('sync', this.gameDeferred.resolve, this.gameDeferred);
    //disable
    this.games.fetch();

    // second: read/create player
    var playerDeferred = $.Deferred();
    this.$el.html("<span style=\"top:50px\">"+i18n.t('message.noconnection')+"</span>");
    Y.User.getPlayerAsync(function (err, player) {
      if (err) {
        // no player => creating player.
    
        // creating the player.
        Y.User.createPlayerAsync(function (err, player) {
          // FIXME: err, reject deferred
         
          playerDeferred.resolve();
        });
        return;
      }
      playerDeferred.resolve();
    });

    // FIXME: handling error with deferreds
    $.when(
      this.gameDeferred,
      playerDeferred
    ).done(function () {
      that.render();
      that.renderList();
            
    });
       
      
  },
  



  goToGame: function (elmt) {
    if (elmt.currentTarget.id) {
      var route = elmt.currentTarget.id;
      Y.Router.navigate(route, {trigger: true}); 
    }
  },

  showFilters: function () {
    
    //this.$('.button-option-down').addClass('button-option-up').removeClass('button-option-down');
    //this.$(".filters").show();
    Y.Router.navigate("search/form", {trigger: true}); 
    
  },
  hideFilters: function () {

    this.$('.button-option-up').addClass('button-option-down').removeClass('button-option-up');   
    
    $('.message').removeAttr('style');
    
    this.$(".filters").hide();
      
  },

  
  searchWithGeo: function () {   	
  	this.setSearch("geolocation");
  },
  
  searchWithAll: function () {   	
  	this.setSearch("not");
  },
  
  searchWithClub: function () {   	
  	if (this.clubid !== "") {
	  	this.setSearch("club");
	}
  }, 
  
  filterByLocation: function () { 
    this.setSort("location");
  },     
  
  filterByDate: function () {   	
  	this.setSort("date");	
  },
   
  filterByStatusAll: function () { 
    console.log('filterByStatusAll');
    this.setSort("all");
  },
  
  filterByStatusOngoing: function () { 
    console.log('filterByStatusOngoing');
    this.setSort("ongoing");
  },
  
  filterByStatusFinished: function () { 
    console.log('filterByStatusFinished');
    this.setSort("finished");
  },
  
  filterByStatusCreated: function () { 
    console.log('filterByStatusCreated');
    this.setSort("created");
  },
      
  setSort: function (o) {
  
     $(".search a[data-filter*='filter-status']").removeClass('select');
     
	if (o==='all') 
      $(".search a[data-filter='filter-status-all']").addClass('select');
 	else if (o==='ongoing') 
  	  $(".search a[data-filter='filter-status-ongoing']").addClass('select'); 
 	else if (o==='finished') 
      $(".search a[data-filter='filter-status-finished']").addClass('select'); 
 	else if (o==='created') 
      $(".search a[data-filter='filter-status-created']").addClass('select');        
          
    this.sortOption = o;   
    Y.User.setFiltersSort(o);
    this.search();     
    //this.hideFilters();
  },


  searchButton: function () {
    this.inputModeOff();
    this.search();
  },

  searchOnKey: function (event) {
    if(event.keyCode == 13){
      // the user has pressed on ENTER
      this.search();
    }
    return this;
  },

  search: function () {
    var q = $("#search-basic").val();
    $(this.listview).html(this.templates.ongoing());
    $('p').i18n(); 
    
    
    
    if (this.sortOption !=="") 
      this.games.setSort(this.sortOption);  
    
    
    if (this.searchOption !=="") {     
      
      if(this.searchOption==="club")
        this.games.setSearch(this.searchOption,this.clubid);  

      else if(this.searchOption==="geolocation") {
        //this.games.setPos([Y.Geolocation.longitude, Y.Geolocation.latitude]);
        //this.games.setSearch(this.searchOption,'');  
      }
      
      else  {
	    this.games.setSearch('player',q);         
      }

    
    }  
    else {
      if (q !== '')
    	this.games.setSearch('player',q);   
    }
    
    
    this.games.fetch().done($.proxy(function () {    
    
      if (this.games.toJSON().length === 0) {
        $(this.listview).html(this.templates.error());
        //this.hideFilters();  
        //style="padding-top:150px;"
        //$('.message').attr('style','padding-top:150px');
      }
      else
        $(this.listview).html(this.templates.gamelist({ games: this.games.toJSON(), query: q }));
    	
      $(this.listview).i18n();
    
    }, this));
    
    return this;
  },

  // should not take any parameters
  render: function () {
    this.$el.html(this.templates.gamesearch({ button:true }));   
    //$('a').i18n(); 
    this.$el.i18n();   

	if (this.searchOption==='geo') 
      $('.filters #filter-match-geo').addClass('select');
 	else if (this.searchOption==='not') 
  	  $('.filters #filter-match-not').addClass('select'); 
 	else if (this.searchOption==='club') 
      $('.filters #filter-match-club').addClass('select'); 
    else
  	  $('.filters #filter-match-not').addClass('select');    
  	  
  	     

	if (this.sortOption==='ongoing') 
  	  $(".search a[data-filter='filter-status-ongoing']").addClass('select'); 
 	else if (this.sortOption==='finished') 
      $(".search a[data-filter='filter-status-finished']").addClass('select'); 
 	else if (this.sortOption==='created') 
      $(".search a[data-filter='filter-status-created']").addClass('select');  
    else
      $(".search a[data-filter='filter-status-all']").addClass('select');
            
      
    if (this.clubid === undefined ) {

    	$('.filters #filter-match-club').addClass('disabled');
    }
    
    //if (Y.Geolocation.longitude === 0) {
    $('.filters #filter-match-geo').addClass('disabled');
    //}
    
    
    return this;
  },

  // should not take any parameters
  renderList: function () {
    $(this.listview).html(this.templates.gamelist({ games: this.games.toJSON(), query: ' ' }));
    $('p.message').i18n();
    return this;
  },

  onClose: function () {
    this.undelegateEvents();
    this.games.off('sync', this.gameDeferred.resolve, this.gameDeferred);
       
  }
});