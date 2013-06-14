var ClubsCollection = Backbone.Collection.extend({

  model : ClubModel,

  mode : 'default',

  query : '',

  initialize : function(param) {

  },

  url : function() {

    if (this.mode === 'search')
      return Y.Conf.get("api.url.clubs") + 'autocomplete/?q=' + this.query+'&limit=15';
    else
      return Y.Conf.get("api.url.clubs");

  },

  setMode : function(m, q) {
    this.mode = m;
    this.query = q;
  }
  

});
