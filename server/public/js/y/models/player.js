var PlayerModel = Backbone.Model.extend({
  urlRoot: Y.Conf.get("api.url.players"),

  mode: '',

  defaults: {
    name: "",
    rank: "NC",
    type: "default",
    games: [],
    club: {
      id: "",
      name: ""
    },
    dates: {
      update: "",
      creation: new Date()
    },
    language: Y.language,
    location: {
      currentPos: [0, 0]
    },
    token: "",
    updated_at: new Date()
  },

  initialize: function () {

  },



  read: function () {


  },



  sync: function (method, model, options) {


    if (method === 'create' && this.get('playerid') === undefined) {
      var that = this;
      return Backbone.ajax({
        dataType: 'json',
        url: Y.Conf.get("api.url.players"),
        type: 'POST',
        data: {
          language: Y.language,
          club: (this.get('club') || '')
        },
        // WHYYYYY ?????
        success: function (data) {
          that.set(data);
          if (options && options.success) {
            options.success(data);
          }
        },
        error: function (message) {
          if (options && options.error)
            options.error(message);
        }
      });
    } else if (this.get('playerid') !== undefined) {
      // Update

      var dataSend = {
        id: (this.get('playerid') || ''),
        name: (this.get('name') || ''),
        email: { address: (this.get('email') || '') },
        rank: (this.get('rank') || ''),
        idlicense: (this.get('idlicence') || ''),
        language: Y.language,
        games: [],
        token: (this.get('token') || '')
      };

      // si mot de passe defini
      if (typeof this.get('password') === "string" && this.get('password') !== '') {
        dataSend.uncryptedPassword = this.get('password');
      }
      // si club non nul
      
      
      if (typeof this.get('clubid') === "string" && this.get('clubid') !== '' && this.get('club') !== '' ) {
        dataSend.club = {
          id: (this.get('clubid') || undefined)
        };
        //On met en cache le numero de club
        Y.User.setClub(this.get('clubid'));
      }
      else {
   
      	Y.User.removeClub();
      	
      	 dataSend.club = {
          id: undefined,
          name : ''
        };
      	
      }

	  var playeridupdated='';
	  if (this.get('playeridupdated') === undefined)
	    playeridupdated = this.get('playerid');
	  else
	    playeridupdated = this.get('playeridupdated');    

      
      console.log(Y.Conf.get("api.url.players") + playeridupdated
            + '/?playerid=' + (this.get('playerid') || '') + '&token='
            + (this.get('token') || ''));
      
      return Backbone.ajax({
        dataType: 'json',
        url: Y.Conf.get("api.url.players") + playeridupdated
            + '/?playerid=' + (this.get('playerid') || '') + '&token='
            + (this.get('token') || ''),
        type: 'POST',
        data: dataSend,
        success : function(player) {
          //MAJ cache ???
 
        }
      });
    }
    else {
      model.url = Y.Conf.get("api.url.players") + this.id;


      return Backbone.sync(method, model, options);

    }



  }

});
