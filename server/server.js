var fs = require('fs'),
  rest = require('restler');

if (fs.existsSync('../../yeswescore-server/server/conf.js')) {
  // spawning server
  var app = require('./app.js');
  var Conf = require('../../yeswescore-server/server/conf.js');
  
  // dynamic pages
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
