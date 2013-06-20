var app = require('./app.js'),
   Conf = require('../../yeswescore-server/server/conf.js');

if (Conf.get("env") === "DEV") {
  console.log('**** ON EST EN DEV ****');
} else {
  // HOME en prod.
  app.get('/', function (req, res) {
    res.sendfile('./public/build/index.html');
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
}