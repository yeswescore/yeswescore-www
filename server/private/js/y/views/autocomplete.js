Y.Views.Autocomplete = Y.View.extend({
  el: "#autocomplete",

  proposals: null, /* @see y/autocomplete.js */

  events: {
    // Hack. mousedown is triggered before blur in the GUI.
    'mousedown .proposal': 'selected'
  },

  initialize: function () { },
  render: function () { },

  autocomplete: null,

  setProposals: function (autocomplete, proposals) {
    assert(autocomplete instanceof Y.Autocomplete);
    assert(_.isArray(proposals));

    // refs.
    this.autocomplete = autocomplete;
    this.proposals = proposals;
    // empty GUI.
    this.$el.empty();
    // creating list of proposals
    this.proposals.forEach(function (proposal, i) {
      var text = null;
      if (proposal) {
        if (typeof proposal === "string")
          text = proposal;
        if (typeof proposal === "object" && proposal.text)
          text = proposal.text;
      }
      if (!text)
        return; // nothing to display.
      this.$el.append($('<div class="proposal" data-index="'+ i +'">').html(text));
    }, this);
  },

  // FIXME:
  // This function should be inlined in setProposals
  //  but we will not have fast-click (no backbone touch ...)
  //  so we prefer to leave it outside, until we can speed up any clicks.
  //  BUT, this actualy leads to memory managment tricks
  //    autocompleteObj must unregister itself from this class, when disposed.
  selected: function (e) {
    var index = $(e.target).attr('data-index');
    if (this.autocomplete)
      this.autocomplete.trigger("selected", this.proposals[index]);
  }
});