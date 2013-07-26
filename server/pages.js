var app = require('./app.js'),
   restify = require('restify'),
   Conf = require('../../yeswescore-server/server/conf.js');

var env = Conf.get("env");
var index = (env === "DEV") ? '../private/index.html' : 'build/index.html';

// HOME
app.get('/', function (req, res) {
  var urlsite = req.protocol + "://" + req.get('host') + req.url;
  res.render(index, {title: "YesWeScore",url:urlsite});
});

// about
app.get('/about/', function (req, res) {
  var urlsite = req.protocol + "://" + req.get('host') + req.url;
  res.render('../public/blog.html', {title: "YesWeScore",url:urlsite});
});

// resultats de recherche
app.get('/clubs/list/:txt', function (req, res) {
  var urlsite = req.protocol + "://" + req.get('host') + req.url;
  res.render(index, {title: "YesWeScore",url:urlsite});
});

// page game (avec club)
app.get('/games/:id/club/:clubid', function (req, res) {
  var urlsite = req.protocol + "://" + req.get('host') + req.url;
  res.render(index, {title: "YesWeScore",url:urlsite});
});

// page game
app.get('/games/:id', function (req, res) {

  var urlsite = req.protocol + "://" + req.get('host') + req.url;
  var url = "http://"+Conf.get("http.host")+':'+Conf.get("http.port");

  var client = restify.createJsonClient({
    url: url
  });

  client.get(url+Conf.get("api.games")+req.params.id, function (err, req2, res2, game) {
    if (err) {
      //console.log('url',url+Conf.get("api.games")+req.params.id);
      console.log(err);
    }
      
    //console.log('Server returned: %j', game);
    
    //TODO : on construit le message
    // Vincent T (15/5) contre Antoine (15/3) à Calais le 24/09 à 17:10
    var msg ="Suivez le match ";
    
    var player1 = game.teams[0].players[0].name;
    if (game.teams[0].players[0].rank)
      player1 += " ("+game.teams[0].players[0].rank+")";     
    msg += player1+" contre ";
    
    var player2 = game.teams[1].players[0].name;
    if (game.teams[1].players[0].rank)
      player2 += " ("+game.teams[1].players[0].rank+")";      
    msg += player2;
    
    var city = "";
    if (game.location.city)    
      city = " à "+game.location.city;
    msg += city;
      
          
  	res.render(index, {title: msg ,url:urlsite});  
  });

  
});

// page club
app.get('/clubs/:id', function (req, res) {
  var urlsite = req.protocol + "://" + req.get('host') + req.url;
  res.render(index, {title: "YesWeScore",url:urlsite});
});

// page player/signin
app.get('/players/signin', function (req, res) {
  var urlsite = req.protocol + "://" + req.get('host') + req.url;
  res.render(index, {title: "YesWeScore",url:urlsite});
});

// page players/profil
app.get('/players/profil', function (req, res) {
  var urlsite = req.protocol + "://" + req.get('host') + req.url;
  res.render(index, {title: "YesWeScore",url:urlsite});
});

app.get('/:version/app.css', function (req, res) {
  res.setHeader("Cache-Control", "public, max-age=345600"); // 4 days
  res.setHeader("Expires", new Date(Date.now() + 345600000).toUTCString());
  var version = parseInt(req.params.version, 10);
  if (version)
    return res.sendfile('./public/build/' + version + '/app.css');
  res.send(404, "page not found");
});

app.get('/:version/app.js', function (req, res) {
  res.setHeader("Cache-Control", "public, max-age=345600"); // 4 days
  res.setHeader("Expires", new Date(Date.now() + 345600000).toUTCString());
  var version = parseInt(req.params.version, 10);
  if (version)
    return res.sendfile('./public/build/' + version + '/app.js');
  res.send(404, "page not found");
});

app.get('/:version/templates.html', function (req, res) {
  res.setHeader("Cache-Control", "public, max-age=345600"); // 4 days
  res.setHeader("Expires", new Date(Date.now() + 345600000).toUTCString());
  var version = parseInt(req.params.version, 10);
  if (version)
    return res.sendfile('./public/build/' + version + '/templates.html');
  res.send(404, "page not found");
});

// cas particulier des images
// FIXME: security, check :name
app.get('/:version/images/:name.jpg', function (req, res) {
  res.setHeader("Cache-Control", "public, max-age=345600"); // 4 days
  res.setHeader("Expires", new Date(Date.now() + 345600000).toUTCString());
  var version = parseInt(req.params.version, 10);
  if (version)
    return res.sendfile('./public/images/' + req.params.name + '.jpg');
  res.send(404, "page not found");
});