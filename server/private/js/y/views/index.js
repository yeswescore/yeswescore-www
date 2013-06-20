Y.Views.Index = Y.View.extend({
  el: "#content",
  
  events: {
    "keyup input#search-basic": "searchOnKey",
    "mousedown .magnifier": "searchButton"
  },  

  pageName: "index",
  pageHash : "index",  
  
  myinitialize: function () {
    Y.GUI.header.title(i18n.t('index.title'));

    this.indexViewTemplate = Y.Templates.get('index');
    
    Y.GUI.header.hide();
    
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
  	  Y.Router.navigate('clubs/list/'+q, {trigger: true});
   
  },  

  // should not take any parameters
  render: function () {
    this.$el.html(this.indexViewTemplate(), {});
    return this;
  },

  onClose: function () {
    this.undelegateEvents();
    //this.games.off("all", this.renderList, this);
  }
});