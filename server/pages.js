var app = require('./app.js');

// pages specifiques
app.get('/', function (req, res) {
  res.sendfile('./public/build/index.html');
});
