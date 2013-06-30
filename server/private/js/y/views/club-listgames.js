Y.Views.ClubListGames = Y.View.extend({
  games: null,
  
  myinitialize : function() {
    this.templates = {
      list: Y.Templates.get('list-games')
    };
    
    // query
    this.games = new GamesCollection();
    this.games.addSearch('club');
    this.games.setClub(this.id);  
    this.games.fetch();
    this.games.on('sync', this.render, this);
    
    if (this.options.autorender)
      this.render();
  },
  
  render: function () {
    if (this.games.length === 0) {
      this.$el.html(this.templates.list({empty:true}));
      return this;
    }
    // once rendered, we fill the templates using listitem-game view.
    for (var i = 0, l = this.games.length; i < l; ++i) {
      var game = this.games.at(i);
      // creating list item game content
      var listitem = new Y.Views.ListItemGame({
        game: game,
        autorender: true
      });
      // creating li
      var li = $(this.templates.list({empty:false})).append(listitem.$el);
      // append to current DOM
      this.$el.append(li);
    }
    return this;
  },
  
  onClose : function() {
    this.games.off('sync', this.render, this);
  }
});