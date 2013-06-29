Y.Views.ClubInfos = Y.View.extend({
  club: null,
  
  myinitialize : function(param) {
    this.templates = {
      club: Y.Templates.get('club-infos')
    };
    
    this.club = new ClubModel({id: this.id});
    this.club.once('sync', this.render, this);
    this.club.fetch();
    
    this.render();
  },
  
  render: function () {
    this.$el.html(this.templates.club({club: this.club.toJSON()}));
    this.$el.i18n();
    return this;
  },
  
  onclose: function () {
    this.club.off('sync', this.render, this);
  }
});
  