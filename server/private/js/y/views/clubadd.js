Y.Views.ClubAdd = Y.View.extend({
  el: "#content",

  events: {
    'submit form#frmAddClub': 'addClub'
  },

  pageName: "clubAdd",
  pageHash : "clubs/add",
  playerid : "",
  token : "",

  initialize: function () {
  
    Y.GUI.header.title(i18n.t('clubadd.title'));

    this.clubAddTemplate = Y.Templates.get('clubAdd');

    this.owner = Y.User.getPlayer();    
    this.token = this.owner.get('token');
    this.playerid = this.owner.get('id');  

    this.render();

  },


  addClub: function (event) {
  
    jq("#navbar").show();
    jq("#content").css("bottom", "48px");
    //$.ui.showNavMenu = true;


    
    var name = $('#name').val()
    , city = $('#city').val();
    
    var club = new ClubModel({
      name: name
    , city: city          
    });

    club.save();    
   
    return false;
  },

  //render the content into div of view
  render: function () {
    this.$el.html(this.clubAddTemplate({}));
    
    return this;
  },

  onClose: function () {
    //Clean
    this.undelegateEvents();

  }
});