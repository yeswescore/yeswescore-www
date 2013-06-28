Y.Views.Pages.Index = Y.View.extend({
  events: {
    "keyup input#search-basic": "searchOnKey",
    "mousedown .magnifier": "searchButton"
  },  

  pageName: "index",
  pageHash : "index",  
  
  myinitialize: function () {
    Y.GUI.header.hide();
    this.indexViewTemplate = Y.Templates.get('page-index');
    this.render();
  },

  searchButton: function () {
    this.search();
  },

  searchOnKey: function (event) {
    if(event.keyCode == 13){
      // the user has pressed on ENTER
      this.search();
    }
    return this;
  },
  
  search: function () {
    var q = $("#search-basic").val();
    
    if (q.length>0)
      Y.Router.navigate('clubs/list/'+q, {trigger: true});s
  },  
  
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
      this.$("#search-basic").val(data.name);   
    }
  },    

  // should not take any parameters
  render: function () {
    this.$el.html(this.indexViewTemplate(), {});
    return this;
  }
});