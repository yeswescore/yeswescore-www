(function (Y) {
  /*#ifdef STRICT*/
  "use strict";
  /*#endif*/

  var Router = Backbone.Router.extend({
    history: [ /* { pageName: ..., pageHash: ... } */ ],

    currentView: null,

    routes: {
      '': 'index',
      'index': 'index',
      'sort/:id': 'gameList',
      'search/form': 'searchForm',      
      'games/me/:id': 'gameMe',
      'games/add': 'gameAdd',
      'games/form/:id': 'gameForm',      
      'games/follow': 'gameFollow',
      'games/end/:id': 'gameEnd',
      'games/club/:id': 'gameClub',
      'games/list': 'gameList',  
      'games/:id/comments/': 'gameComment', 
      'games/:id': 'game', 
      'games/': 'gameList',        
      'players/list': 'playerList',
      'players/club/:id': 'playerListByClub',
      'players/form/me': 'playerFormFirst',        
      'players/form': 'playerForm',     
      'players/signin': 'playerSignin',
      'players/forget': 'playerForget',
      'players/follow': 'playerFollow',                                              
      'players/:id': 'player',
      'clubs/add': 'clubAdd',
      'clubs/follow': 'clubFollow', 
      'clubs/list/:id': 'clubList',      
      'clubs/list': 'clubList',           
      'clubs/:id/game/:gameid': 'clubGame',
      'clubs/:id': 'club',
      'account': 'account'
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
      return function () {
        return new view(params);
      };
    },

    account: function () {
      this.changePage(this.createViewFactory(Y.Views.Account));
    },

    club: function (id) {
      this.changePage(this.createViewFactory(Y.Views.Club, { id: id }));
    },

    clubGame: function (id,gameid) {
      this.changePage(this.createViewFactory(Y.Views.Club, { id: id, gameid: gameid }));
    },

    clubAdd: function (id) {
      this.changePage(this.createViewFactory(Y.Views.ClubAdd));
    },
    
    clubList: function (id) {
      this.changePage(this.createViewFactory(Y.Views.ClubList, { id: id }));
    },
    

    clubFollow: function () {
      this.changePage(this.createViewFactory(Y.Views.ClubFollow));
    },

    index: function (id) {
      this.changePage(this.createViewFactory(Y.Views.Index, { sort: id }));
    },

    game: function (id) {
      this.changePage(this.createViewFactory(Y.Views.Game, { id: id }));
    },

    gameList: function (sort) {
      if (typeof sort === "undefined") sort='';
      this.changePage(this.createViewFactory(Y.Views.GameList, { search: '', id: '', sort: sort }));
    },
    
    gameMe: function (id) {
      this.changePage(this.createViewFactory(Y.Views.GameList, { search: 'me', id: id, sort: '' }));
    },

    gameClub: function (id) {
      this.changePage(this.createViewFactory(Y.Views.GameList, { search: 'club', id: id, sort: '' }));
    },    

    gameAdd: function () {
      this.changePage(this.createViewFactory(Y.Views.GameAdd));
    },

    gameEnd: function (id) {
      this.changePage(this.createViewFactory(Y.Views.GameEnd, { id: id }));
    },

    gameComment: function (id) {
      this.changePage(this.createViewFactory(Y.Views.GameComments, { id: id }));
    },

    gameFollow: function () {
      this.changePage(this.createViewFactory(Y.Views.GameFollow));
    },
    
    gameForm: function (id) {
      this.changePage(this.createViewFactory(Y.Views.GameForm, { id: id }));
    },    

    searchForm: function () {
      this.changePage(this.createViewFactory(Y.Views.SearchForm ));
    }, 

    player: function (id) {
      this.changePage(this.createViewFactory(Y.Views.Player, { id: id, follow: '' }));
    },

    playerFollow: function (id) {
      this.changePage(this.createViewFactory(Y.Views.PlayerFollow));
    },

    playerNoFollow: function (id) {
      this.changePage(this.createViewFactory(Y.Views.Player, { id: id, follow: 'false' }));
    },

    playerFormFirst: function () {
      this.changePage(this.createViewFactory(Y.Views.PlayerForm, { mode: 'first'}));
    },
    
    playerForm: function () {
      this.changePage(this.createViewFactory(Y.Views.PlayerForm, { mode: ''}));
    },

    playerList: function () {
      this.changePage(this.createViewFactory(Y.Views.PlayerList));
    },

    playerListByClub: function (id) {
      this.changePage(this.createViewFactory(Y.Views.PlayerList, { id: id }));
    },

    playerSignin: function () {
      this.changePage(this.createViewFactory(Y.Views.PlayerSignin));
    },

    playerForget: function () {
      this.changePage(this.createViewFactory(Y.Views.PlayerForget));
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