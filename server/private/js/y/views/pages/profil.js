Y.Views.Pages.PlayerProfil = Y.View.extend({
  events: {
    'click #savePlayer':'save',
    'click #deconnexion':'deconnexion',
    'keyup #club': 'updateList',
    'click #club_choice' : 'displayClub'
  },
  
  listview:"#suggestions",

  pageName: "playerProfil",
  pageHash : "players/profil",  
  
  isPage: true,
  
  clubs:null,

  myinitialize:function() {
    //header
    Y.GUI.header.title(i18n.t('playerform.title'));
    Y.GUI.header.show();
  
    // loading templates.
    this.templates = {
      page: Y.Templates.get('page-profil')/*,
      clublist: Y.Templates.get('clubListAutoComplete')
*/
    };
    
    this.player = Y.User.getPlayer();
    this.player.once("sync", this.render, this);	
    this.player.fetch();

    // we render immediatly
    this.render();
  },
  
  /*
  autocompleteClubs: function (input, callback) {
    if (input.indexOf('  ')!==-1 || input.length<= 1 )
      callback('empty');		
    
    Backbone.ajax({
      url: Y.Conf.get("api.url.autocomplete.clubs"),
      type: 'GET',
      dataType : 'json',
      data: { q: input }
    }).done(function (clubs) {
      if (clubs && _.isArray(clubs) && clubs.length>0) {
        callback(null, clubs.splice(0, 3).map(function (p) { p.text = p.name; return p; }));
      } else {
        callback(null, []);
      }
    }).fail(function (xhr, error) { 
      callback(error);
    });
  },

  autocompleteChoose: function (data) {
    if (data && data.name) {
      this.$("#club").val(data.name);
      this.clubid = data.id;
      this.$('.error').html('');      
    }
  },
  */
  
  render: function () {
    // empty page.
    var clubName = (this.player.club) ? this.player.club.name : '';
    this.$el.html(this.templates.page({
      data: this.player.attributes,
      clubName: clubName
    }));
    this.$el.i18n();
    return this;
  },
  
  save: function (event) {
    var name = $('#name').val()
      , rank = $('#rank').val().replace(/ /g, "")
      , playerid = this.playerid
      , token = this.token
      , club = $('#club').val()
      , clubid = this.clubid
      , idlicence = $('#idlicence').val()
      , player = null;
      
    //On cache toutes les erreurs 
    $("div.success").hide();

    if (checkRank(rank) && rank.length>0) {
      $('.rank_error').html(i18n.t('message.bad_rank')+' !').show();
      $('#rank').val('');        
      return false;	   
    };
    
    if (name.length==0) {
      $('.name_error').html(i18n.t('message.empty_name')+' !').show();      
      return false;	   
    };
    
    if (checkName(name) && name.length>0) {
      $('.name_error').html(i18n.t('message.bad_name')+' !').show();
      $('#name').val('');        
      return false;	   
    };

    if (checkLicence(idlicence) && idlicence.length>0) {
      $('.idlicence_error').html(i18n.t('message.bad_licence')+' !').show();
      $('#idlicence').val('');        
      return false;	   
    };

    if (checkName(club) && club.length>0) {
      $('.error').html(i18n.t('message.bad_name')+' !').show();
      $('#club').val('');        
      return false;	   
    };
    
    var that = this;
    var player = Y.User.getPlayer();
    player.set('name', name);
    player.set('rank', rank);
    player.set('idlicence', idlicence);
    player.set('club', club);
    player.set('clubid', clubid);

    //FIXME :  add control error
    player.save().done(function () {
      $('div.success').css({display:"block"});
      $('div.success').html(i18n.t('message.updateok')).show();
      $('div.success').i18n();
    });
    
    return false;
  },     
    
  deconnexion : function (event) {
    // removing player
    Y.User.removePlayer();
    // routing to homepage
    Y.Router.navigate("", {trigger: true});
  },

  onClose: function(){
    this.player.off("sync", this.render, this);
  }
});