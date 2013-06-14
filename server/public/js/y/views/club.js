Y.Views.Club = Y.View.extend({
  el : "#content",

  events : {
    'click #followButton' : 'followClub'
  },

  pageName: "club",
  pageHash : "clubs/",
  
  initialize : function() {
  
	//header    
  	Y.GUI.header.title(i18n.t('club.title'));
  
    // loading templates.
    this.templates = {
      layout: Y.Templates.get('empty'),
      club:  Y.Templates.get('club')
    };
    
    // we render immediatly
    this.render();        

    this.club = new ClubModel({id : this.id});   
    this.club.once('sync', this.renderClub, this);      
    this.club.fetch();
    
    var clubs_follow = Y.Conf.get("owner.clubs.followed");
    if (clubs_follow !== undefined)
    {
      if (clubs_follow.indexOf(this.id) === -1) {
        this.follow = 'false';
      }
      else
        this.follow = 'true';          
    }
    else
      this.follow = 'false';    

  },

	followClub: function() {
  
        if (this.follow === 'true') {

          var clubs_follow = Y.Conf.get("owner.clubs.followed");
          if (clubs_follow !== undefined)
          {
            if (clubs_follow.indexOf(this.id) !== -1) {
              //On retire l'elmt
              clubs_follow.splice(clubs_follow.indexOf(this.id), 1);
              Y.Conf.set("owner.clubs.followed", clubs_follow, { permanent: true });
            }
          }
          
          $('span.success').css({display:"block"});
          $('span.success').html(i18n.t('message.nofollowclubok')).show();
          $("#followButton").text(i18n.t('message.follow'));
          $('#followButton').removeClass('button-selected');
          $('#followButton').addClass('button'); 

          this.follow = 'false';

        } else {
        
          //Via localStorage
          var clubs_follow = Y.Conf.get("owner.clubs.followed");
          if (clubs_follow !== undefined)
          {
            if (clubs_follow.indexOf(this.id) === -1) {
              clubs_follow.push(this.id);
              Y.Conf.set("owner.clubs.followed", clubs_follow, { permanent: true });
            }
          }
          else
            Y.Conf.set("owner.clubs.followed", [this.id]);

		  $('span.success').css({display:"block"});
          $('span.success').html(i18n.t('message.followclubok')).show();
          $("#followButton").text(i18n.t('message.nofollow'));
          $('#followButton').removeClass('button');
          $('#followButton').addClass('button-selected');          
          

          this.follow = 'true';

        }	
  
  },    

  render: function () {
    // empty page.
	  this.$el.html(this.templates.layout());

	  return this;
  },
  
 
  // render the content into div of view
  renderClub : function() {
  
    this.$el.html(this.templates.club({
      club : this.club.toJSON(),follow:this.follow
    }));
    
	this.$el.i18n();    

    return this;
  },

  onClose : function() {
    this.undelegateEvents();
    this.club.off("sync", this.renderClub, this);
  }
});