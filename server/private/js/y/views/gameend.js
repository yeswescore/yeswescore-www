Y.Views.GameEnd = Y.View.extend({
  el:"#content",

  events: {
    'submit form#frmEndGame':'endGame'
  },

  pageName: "gameEnd",
  pageHash : "games/end/",
  playerid: "",
  token: "",
      
  initialize:function() {
  
    Y.GUI.header.title(i18n.t('gameend.title'));	    
  
    this.gameEndTemplate = Y.Templates.get('gameEnd');

    this.owner = Y.User.getPlayer();    
    this.token = this.owner.get('token');
    this.playerid = this.owner.get('id');
    
    this.render();

  },
  
  endGame: function (event) {
    var privateNote = $('#privateNote').val(),
    fbNote = $('#fbNote').val();
        
    //Y.Router.navigate("/#games/"+game.id, true);
    //alert(privateNote+' '+fbNote);
    return false;
  },
  
  //render the content into div of view
  render: function(){
	  this.$el.html(this.gameEndTemplate({playerid:this.owner.id, token:this.owner.token}));
	  return this;
  },

  onClose: function(){
    this.undelegateEvents();
  }
});