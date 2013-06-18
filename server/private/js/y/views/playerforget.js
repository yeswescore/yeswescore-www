Y.Views.PlayerForget = Y.View.extend({
  el : "#content",

  events: {
    'focus input[type="text"]': 'inputModeOn',
    'blur input[type="text"]': 'inputModeOff',
    'click #forgetPlayer' : 'forget'
  },

  pageName: "playerForget",
  pageHash : "players/forget",
  
  initialize : function() {
    Y.GUI.header.title(i18n.t('playerforget.title'));     
  
    this.playerForgetTemplate = Y.Templates.get('playerForget');
    this.render();
  },
  
  forget : function(event) {
    var mail = $('#email').val();

	  Backbone.ajax({
      dataType: 'json',
      url: Y.Conf.get("api.url.auth") + "resetPassword/",
      type: 'POST',
      data: {
        email: { address: mail }
      },
      success: function (data) {
		    $('span.success').css({display:"block"});
        $('span.success').html(i18n.t('message.mailspam')).show();
        $('span.success_sentence').html(i18n.t('message.mailspam_sentence')).show();
      },
      error: function (err) {
	      $('span.error').css({display:"block"});
		    $('span.error').html(i18n.t('message.mailerror')).show();
		    $('span.error').i18n();
      }
    });
    return this;
  },

  // render the content into div of view
  render : function() {
    this.$el.html(this.playerForgetTemplate({}));
    this.$el.i18n();
    return this;
  },

  onClose : function() {
    this.undelegateEvents();
  }
});
