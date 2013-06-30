var app = require('./app.js'),
   Conf = require('../../yeswescore-server/server/conf.js');

var env = Conf.get("env");
var index = (env === "DEV") ? '../private/index.html' : 'build/index.html';

// HOME
app.get('/', function (req, res) {
  res.render(index, {foo: "bar"});
});

// about
app.get('/about/', function (req, res) {
  res.render('../public/blog.html', {foo: "bar"});
});

// resultats de recherche
app.get('/clubs/list/:txt', function (req, res) {
  res.render(index, {foo: "bar"});
});

// page game (avec club)
app.get('/games/:id/club/:clubid', function (req, res) {
  res.render(index, {foo: "bar"});
});

// page game
app.get('/games/:id', function (req, res) {
  res.render(index, {foo: "bar"});
});

// page club
app.get('/clubs/:id', function (req, res) {
  res.render(index, {foo: "bar"});
});

// page player/signin
app.get('/players/signin', function (req, res) {
  res.render(index, {foo: "bar"});
});

// page players/profil
app.get('/players/profil', function (req, res) {
  res.render(index, {foo: "bar"});
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