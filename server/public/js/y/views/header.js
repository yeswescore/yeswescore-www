Y.Views.Header = Y.View.extend({
  el: "#header",

  events: {
    "click .backButton": "goBack",
    "click .connectionStatus": "goLink"
  },

  initialize: function () {
    this.startingLength = window.history.length;

    // on s'abonne au router, pour detecter des changement de pages.
    var that = this;
    Y.Router.on("pageChanged", function (a, b) {
      that.repaintBack();
    });

    // loading owner
    this.owner = Y.User.getPlayer();
    
    console.log('this.owner',this.owner);

	if (this.owner===null)
	  $('.connectionStatus').html(i18n.t('header.connexion'));
 	else
 	  $('.connectionStatus').html(i18n.t('header.myaccount'));
 
  },
  render: function () { },

  // @param string title
  // @return void.
  title: function (title) { 
    if (typeof title === "string")
      this.$(".title").text(title);
  },

  goBack: function () {
    window.history.go(-1);
    return false;
  },

  goLink: function () {
    //window.history.go(-1);
    //return false;
    if (this.owner===null)
      Y.Router.navigate("players/signin", {trigger: true}); 
    else
      Y.Router.navigate("players/form", {trigger: true});  
      
  },
  
  showBack: function () { this.$(".backButton").show() },
  hideBack: function () { this.$(".backButton").hide() },
  repaintBack: function () {
    var pageName = Y.GUI.content.pageName;
    
    //console.log('pageName '+pageName);
    
    if (pageName == "index")
      this.hideBack();
    else
      this.showBack();
  },



  hide: function () { 

	  this.$el.hide();
  },

  show: function () { 

	  this.$el.show();
  }
  
});