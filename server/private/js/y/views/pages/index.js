Y.Views.Pages.Index = Y.View.extend({
  events: {
    "keyup input#search-basic": "searchOnKey",
    "mousedown .magnifier": "searchButton",
    "mousedown .autocomplete li": "goToClub"
  },  

  pageName: "index",
  pageHash : "index",  
  
  // interface.
  autocompleteGUI: {
    setProposals: null
  },
  
  myinitialize: function () {
    Y.GUI.header.hide();
    var that = this;
    this.autocompleteGUI.setProposals = $.proxy(this.setProposals, this);
    this.indexViewTemplate = Y.Templates.get('page-index');
    this.render();
  },
  
  setProposals: function (autocomplete, proposals) {
    // proposals = [ { id: "...", name: "...", text: "..." }, ... ]
    console.log('setProposals ! ' + proposals.length);
    if (proposals.length === 0)
      return;
    var $autocomplete = this.$(".autocomplete");
    var $about = this.$(".about");
    $about.hide();
    $autocomplete.empty();
    $autocomplete.show();
    proposals.forEach(function (proposal) {
      // FIXME: remove html from view code.
      $autocomplete.append('<li data-clubid="'+ proposal.id + '">'+proposal.text+'</li>');
    }, this);
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
      Y.Router.navigate('clubs/list/'+q, {trigger: true});
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

  goToClub: function (ev) {
    var clubid = $(ev.target).data("clubid");
    Y.Router.navigate("#clubs/"+clubid, {trigger: true});  
  },
  
  // should not take any parameters
  render: function () {
    this.$el.html(this.indexViewTemplate(), {});
    return this;
  }
});