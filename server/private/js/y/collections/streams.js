var StreamsCollection = Backbone.Collection.extend({
  model: StreamModel, 
  mode: 'default',
  gameid:'', 
  query: '',
 	
  initialize: function (streamItems, options) {
		this.gameid = options.gameid;
  },

  url: function() {
    if (this.length > 0) {
      var lastid = this.at(0).id;
      return Y.Conf.get("api.url.games")+this.gameid+"/stream/?lastid="+lastid;
    }
    return Y.Conf.get("api.url.games")+this.gameid+"/stream/?limit=50"; 
  },
	
  comparator: function (item) {
    var dates = item.get("dates");
    if (dates && dates.creation)
      //return new Date(dates.creation).getTime();
      return Date.fromString(dates.creation).getTime();
    assert(false);
    return 0; // at the end of the list.
  },

  // default behaviour: remove = false.
  fetch: function (o) {
    o = o || {};
    o.remove = o.remove || false;
    return Backbone.Collection.prototype.fetch.call(this, o);
  }
});
