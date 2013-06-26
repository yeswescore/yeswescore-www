Y.Views.Header = Y.View.extend({
  el: "#header",

  events: {
    "click .connection .status": "goLink"
  },

  initialize: function () {
    // update le header au signin.
    Y.User.on("changed", this.render, this);
    //
    this.render();
  },
  
  render: function () {
    if (Y.User.getPlayer() === null) {
      $('.connection .status').removeClass("connected");
      $('.connection .status').html(i18n.t('header.connexion'));
    } else {
      $('.connection .status').addClass("connected");
      $('.connection .status').empty();
    }
  },

  // @param string title
  // @return void.
  title: function (title) { 
    if (typeof title === "string")
      this.$(".title").text(title);
  },

  goLink: function () {
    if (Y.User.getPlayer() === null)
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