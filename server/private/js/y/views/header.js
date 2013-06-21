Y.Views.Header = Y.View.extend({
  el: "#header",

  events: {
    "click .connectionStatus": "goLink"
  },

  initialize: function () {
    this.owner = Y.User.getPlayer();
    this.render();
  },
  
  render: function () {
    if (this.owner===null) {
      $('.connectionStatus').removeClass("connected");
      $('.connectionStatus').html(i18n.t('header.connexion'));
    } else {
      $('.connectionStatus').addClass("connected");
    }
  },

  // @param string title
  // @return void.
  title: function (title) { 
    if (typeof title === "string")
      this.$(".title").text(title);
  },

  goLink: function () {
    if (this.owner===null)
      Y.Router.navigate("players/signin", {trigger: true}); 
    else
      Y.Router.navigate("players/form", {trigger: true});  
  },

  hide: function () { 
    this.$el.hide();
  },

  show: function () { 
    this.$el.show();
  }
});