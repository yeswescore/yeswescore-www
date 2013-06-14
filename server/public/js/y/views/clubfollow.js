Y.Views.ClubFollow = Y.View.extend({
  el:"#content",
  
  events: {
    "blur input#search-basic": "search",
    "click li": "chooseClub"    
  },

  listview:"#listClubsView",  
  
  pageName: "clubFollow",
  pageHash : "clubs/follow",

  initialize:function() {

	//header      
    Y.GUI.header.title(i18n.t('clubfollow.title'));    

    // loading templates.
    this.templates = {
      clublist:  Y.Templates.get('clubList'),
      clubsearch: Y.Templates.get('clubListSearch'),
      error: Y.Templates.get('error'),
      ongoing: Y.Templates.get('ongoing') 
    };
    

    this.render();		
       
    var clubs = Y.Conf.get("owner.clubs.followed");
	  
    if (clubs!==undefined) {   
    	this.clubLast = clubs[clubs.length-1];
	    this.collection = new ClubsCollection();	
	    var that = this;
	    var i = clubs.length;	
	    
        if (clubs.length<1) {
	      $(this.listview).html(this.templates.clublist({clubs:[],query:' '}));
	      $('p.message').i18n();		          
        }	    
	    
		this.syncClub = function (club) {		
 		  that.collection.add(club);
	      i--;
          //si dernier element du tableau
          if (that.clubLast === club.get('id')) {	    	
	    	$(that.listview).html(that.templates.clublist({clubs:that.collection.toJSON(),query:' '}));  	
	      }
	          			
		};	    
	   
	    this.clubs = [];
	    	    
	    clubs.forEach(function (clubid,index) {
		  var club = new ClubModel({id : clubid});
		  club.once("sync", this.syncClub, this);

	        club.fetch().error(function (xhrResult, error) {	        

	        	if (clubs.indexOf(clubid) !== -1) {
		          clubs.splice(clubs.indexOf(clubid), 1);
		          Y.Conf.set("owner.clubs.followed", clubs, { permanent: true });
		          
		          if (clubs.length<1) {
				   $(that.listview).html(that.templates.clublist({clubs:[],query:' '}));
				   $('p.message').i18n();		          
		          }
		          else
		            this.clubLast = clubs[clubs.length-1];
   
		        }
	        	
	        });
	        
	      this.clubs[index] = club;	      			
	    },this);
	 }
	 else {	 
	   $(this.listview).html(this.templates.clublist({clubs:[],query:' '}));
	   $('p.message').i18n();
	 }
     
  },
  
  chooseClub : function(elmt) { 
    var ref = elmt.currentTarget.id;

	Y.Router.navigate(ref, {trigger: true});  
  },  
  
  search:function() {
    var q = $("#search-basic").val();
    $(this.listview).html(this.templates.error());
    $('p').i18n();   
    this.clubs = new ClubsCollection();  	  
    this.clubs.setMode('search',q);
    this.clubs.fetch().done($.proxy(function () {        
      
      //$(this.listview).html(this.templates.clublist({clubs:this.clubs.toJSON(), query:q}));
      if (this.clubs.toJSON().length === 0) {
        $(this.listview).html(this.templates.error());
      }
      else
        $(this.listview).html(this.templates.clublist({ clubs: this.clubs.toJSON(), query: q }));
    	
      $(this.listview).i18n();
            
    }, this));
    
    return this;
  },

  //render the content into div of view
  render: function(){
    this.$el.html(this.templates.clubsearch({}));
	$('a').i18n(); 
    return this;
  },

  renderList: function(query) {
    $(this.listview).html(this.templates.clublist({clubs:this.collection.toJSON(), query:' '}));

    return this;
  },

  onClose: function(){
    this.undelegateEvents();

	if (this.clubs!==undefined) {
		this.clubs.forEach(function (club) {
		   club.off("sync", this.syncClub, this);
		}, this);
	}
  }
});