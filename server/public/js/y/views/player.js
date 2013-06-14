Y.Views.Player = Y.View.extend({
  el:"#content",

  events: {
    'click #followButton': 'followPlayer'
  },

  pageName: "player",
  pageHash : "players/",

  myinitialize: function(options) {
  
    this.pageHash += this.id; 
    
    Y.GUI.header.title(i18n.t('player.title'));	    
  
    this.playerViewTemplate = Y.Templates.get('player');



    this.player = new PlayerModel({id:this.id});
    //change
    this.player.on( 'sync', this.render, this );
        
    this.player.fetch(); 

    var players_follow = Y.Conf.get("owner.players.followed");
    if (players_follow !== undefined)
    {
      if (players_follow.indexOf(this.id) === -1) {
        this.follow = 'false';
      }
      else
        this.follow = 'true';          
    }
    else
      this.follow = 'false';


  },

  followPlayer: function() {
  
        if (this.follow === 'true') {

          var players_follow = Y.Conf.get("owner.players.followed");
          if (players_follow !== undefined)
          {
            if (players_follow.indexOf(this.id) !== -1) {
              //On retire l'elmt
              players_follow.splice(players_follow.indexOf(this.id), 1);
              Y.Conf.set("owner.players.followed", players_follow, { permanent: true });
            }
          }
          
          $('span.success').css({display:"block"});
          $('span.success').html(i18n.t('message.nofollowplayerok')).show();
          $("#followButton").text(i18n.t('message.follow'));
          $('#followButton').removeClass('button-selected');
          $('#followButton').addClass('button'); 

          this.follow = 'false';

        } else {
        
          //Via localStorage
          var players_follow = Y.Conf.get("owner.players.followed");
          if (players_follow !== undefined)
          {
            if (players_follow.indexOf(this.id) === -1) {
              players_follow.push(this.id);
              Y.Conf.set("owner.players.followed", players_follow, { permanent: true });
            }
          }
          else
            Y.Conf.set("owner.players.followed", [this.id]);

		  $('span.success').css({display:"block"});
          $('span.success').html(i18n.t('message.followplayerok')).show();
          $("#followButton").text(i18n.t('message.nofollow'));
          $('#followButton').removeClass('button');
          $('#followButton').addClass('button-selected');          
          

          this.follow = 'true';

        }	
  
  },    

  //render the content into div of view
  render: function(){
  
    console.log('players',this.player.toJSON());

    this.$el.html(this.playerViewTemplate({
      player:this.player.toJSON(),follow:this.follow
    }));
    
    this.$el.i18n();

    return this;
  },

  onClose: function(){
    this.undelegateEvents();
    this.player.off("sync",this.render,this);   
    //this.$el.off('pagebeforeshow'); 
  }
});