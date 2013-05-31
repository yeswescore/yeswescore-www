var fs = require('fs')
, Q = require("q")
, rest = require('restler');

if (fs.existsSync('../../yeswescore-server/server/conf.js')) {
  // spawning server
  var app = require('./app.js');
  var Conf = require('../../yeswescore-server/server/conf.js');
  
  // dynamic pages
  app.get('/', function (req, res) {
      res.render('index.ejs', {
        layout: false
      });
  });

  app.get('/search', function (req, res) {
    // list of games

    if (req.query !== undefined) {
	  if (req.query.search !== undefined) {
	    var host = Conf.get('http.host')
	      , port = Conf.get('http.port')
	      , api  = '/v1/clubs/autocomplete/?q='+req.query.search;
	    // fetching yeswescore api
	    
	    console.log("http://"+host+":"+port+api);
	    
	    rest.get("http://"+host+":"+port+api).on('complete', function (clubs) {
	      // sending data to template
	      res.render('clubs.ejs', {
	        layout: false,
	        clubs: clubs
	      });
	    });
	   }
	   else {
         res.render('index.ejs', {
          layout: false
         });	 
	   }	   
	   
	 }
	 else {
      res.render('index.ejs', {
        layout: false
      });	 
	 }

    
  });
  

  app.get('/game/:id', function (req, res) {
    // list of games

    if (req.params !== undefined) {
	  if (req.params.id !== undefined) {
	    var host = Conf.get('http.host')
	      , port = Conf.get('http.port')
      	  , api  = Conf.get('api.games')+req.params.id;
	    // fetching yeswescore api
	    console.log("http://"+host+":"+port+api);
	    
	    rest.get("http://"+host+":"+port+api).on('complete', function (game) {
	    
	      console.log('game',game);
	      
	      if (game.error === undefined) {
		      // sending data to template
		      res.render('game.ejs', {
		        layout: false,
		        game: game
		      });
		  }
		  else {
	         res.render('error.ejs', {
	          layout: false
	         });			  
		  }
		      
	      
	    });
	   }
	   else {
         res.render('error.ejs', {
          layout: false
         });	 
	   }	   
	   
	 }
	 else {
      res.render('error.ejs', {
        layout: false
      });	 
	 }

    
  });

  app.get('/club/:id', function (req, res) {
    // list of games

    if (req.params !== undefined) {
	  if (req.params.id !== undefined) {
	    var host = Conf.get('http.host')
	      , port = Conf.get('http.port');
	      
	      
	      console.log("http://"+host+":"+port+'/v1/clubs/'+req.params.id);
	      console.log("http://"+host+":"+port+'/v1/clubs/'+req.params.id+'/games/?limit=15');	      
	      
		
		      // doing in parallel 2 things
			   rest.get("http://"+host+":"+port+'/v1/clubs/'+req.params.id).on('complete', function (club) {	    
			   
			   	   console.log('club',club);
	    		
				    rest.get("http://"+host+":"+port+'/v1/clubs/'+req.params.id+'/games/?limit=15').on('complete', function (games) {
				    
				      if (games.error === undefined) {
						
					  }
					  					  
					 
		    		 console.log('games',games);    		 
				  
				      res.render('club.ejs', {
				        layout: false,
				        club: club,
				        games: games
				      });	
					  
				    });	    		
	    		   
	   	 		});	    
	    
	   }
	   else {
         res.render('error.ejs', {
          layout: false
         });	 
	   }	   
	   
	 }
	 else {
      res.render('error.ejs', {
        layout: false
      });	 
	 }

    
  });  
  
  app.get('/test.html', function (req, res) {
    // list of games
    var host = Conf.get('http.host')
      , port = Conf.get('http.port')
      , api  = Conf.get('api.games');
    // fetching yeswescore api
    rest.get("http://"+host+":"+port+api).on('complete', function (games) {
      // sending data to template
      res.render('test.ejs', {
        layout: false,
        games: games
      });
    });
  });
  
  app.listen(Conf.get('www.http.port'));
} else {
  // spawning blank error page
  var http = require('http')
  http.createServer(function (req, res) {
    console.log('missing configuration file');
    // we do not give any info to the user
    res.writeHead(500);
    res.end('');
  }).listen(80);
}
