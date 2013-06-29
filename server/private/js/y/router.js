(function (Y) {
  /*#ifdef STRICT*/
  "use strict";
  /*#endif*/

  var Router = Backbone.Router.extend({
    history: [ /* { pageName: ..., pageHash: ... } */ ],

    currentView: null,

    previousFragment: null,
    currentFragment: null,
    
    // liste des urls ouvertes
    
    routes: {
      '': 'index',
      'clubs/list/:text': 'clubList',      
      'clubs/:id/game/:gameid': 'clubGame',
      'clubs/:id': 'club',
      'players/signin?back=:back': 'playerSignin',
      'players/signin': 'playerSignin'
    },

    initialize: function (options) {

    },
    
    /*
    * @param Y.Views.*  view 
    * @param object     params 
    * @return function returning a view object.
    */
    createViewFactory: function (view, params) {
      assert(typeof view !== "undefined");
      if (!params.el)
        params.el = "#content";
      return function () {
        return new view(params);
      };
    },

    index: function (id) {
      this.changePage(this.createViewFactory(Y.Views.Pages.Index, { sort: id }));
    },

    clubGame: function (id,gameid) {
      this.changePage(this.createViewFactory(Y.Views.Pages.Club, { id: id, gameid: gameid }));
    },
    
    clubList: function (text) {
      this.changePage(this.createViewFactory(Y.Views.Pages.ClubList, { text: text }));
    },

    club: function (id) {
      this.changePage(this.createViewFactory(Y.Views.Pages.Club, { id: id }));
    },

    playerSignin: function (back) {
      this.changePage(this.createViewFactory(Y.Views.Pages.PlayerSignin, { back: !!back }));
    },

    /*
    * you can change page passing a function:
    *    this.changePage(function () { return new Y.Views.Account() });
    *
    * @param function  viewFactory    function returning a view
    */
    changePage: function (viewFactory) {
      assert(typeof viewFactory === "function");

      var previousPageName = "none"
        , previousPageHash = "none"
        , nextPageName = "unknown"
        , nextPageHash = "unknown"
        , view = null
        , that = this;

      // previous page name, page hash
      if (this.currentView && this.currentView.pageName)
        previousPageName = this.currentView.pageName;
      if (this.currentView && this.currentView.pageHash)
        previousPageHash = this.currentView.pageHash;

      // previous fragment.
      this.previousFragment = this.currentFragment;
      this.currentFragment = Backbone.history.fragment;
      
      // event
      try {
        this.trigger('beforePageChanged', previousPageName, previousPageHash);
      } catch (e) {
        assert(false);
      };

      // closing current view (still in the DOM)
      try {
        if (this.currentView) {
          this.currentView.close();
          // this.currentView.remove(); // FIXME. gc: should we call remove ?
        }
      } catch (e) {
        assert(false);
      };

      //
      // Reflow bug under ie10 (WP8) maybe iOS & android.
      // when document.documentElement is scrolled down & 
      //  loading a new small view inside #content
      //  the new view is rendered above the screen
      //  because document.height hasn't been reflowed yet 
      // 
      // using document.documentElement.scrollTop = 0; is not enough
      //   we must force a reflow & setTimeout to let the GUI thread some time to render.
      //
      // /!\ Be warned, this bugfix is empirical.
      //
      var next = function () {
        // creating view

        /*#ifdef DEV*/
        if (true) {
          // in dev, directly call viewFactory, to be able to debug exceptions.
          view = viewFactory();
        } else {
        /*#endif*/
          try {
            // avoiding exception in view.
            view = viewFactory();
          } catch (e) {
            assert(false);
          };
        /*#ifdef DEV*/
        }
        /*#endif*/

        // next page name, page hash
        if (view && view.pageName)
          nextPageName = view.pageName;
        if (view && view.pageHash)
          nextPageHash = view.pageHash;

        // acting the change in Router.currentView & Y.GUI.content
        that.currentView = view;
        Y.GUI.content = view;

        // event
        try {
          that.trigger('pageChanged', nextPageName, nextPageHash);
        } catch (e) {
          assert(false);
        };

        // stats.
        //Y.Stats.page(previousPageName, nextPageName);
      };

      // scrolltop, juste after reflow
      // with a good browser engine (aka ie10) rendering is perfect.
      // FIXME: dependancy router => DOM .. yeak :(
      var WP8=true;
      /*#ifndef WP8*/
      WP8=true;
      /*#endif*/
      if (WP8) {
        if (document.documentElement)
          document.documentElement.scrollTop = 0;
        else
          document.body.scrollTop = 0;
        document.getElementById("content").getBoundingClientRect(); // force reflow
        setTimeout(next, 10);
      } else {
        next();
      }
    }
  });
  Y.Router = new Router();
})(Y);