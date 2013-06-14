Y.Views.Account = Y.View.extend({
  el: "#content",

  pageName: "account",
  pageHash : "account", 
  
  myinitialize: function () {
    Y.GUI.header.title(i18n.t('account.title'));
    this.accountViewTemplate = Y.Templates.get('account');
    this.clubid = Y.User.getClub();
    this.owner = Y.User.getPlayer()
    this.render();
  },

  render: function () {
	  $(this.el).html(this.accountViewTemplate({owner: this.owner, clubid: this.clubid}));
	  $('a').i18n();
  },

  onClose: function () {
    this.undelegateEvents();
  }
});