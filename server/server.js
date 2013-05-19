var fs = require('fs');

if (fs.existsSync('../../yeswescore-server/server/conf.js')) {
  // spawning server
  var app = require('./app.js');
  var Conf = require('../../yeswescore-server/server/conf.js');
  app.listen(Conf.get('www.http.port'));
} else {
  // spawning blank error page
  http.createServer(function (req, res) {
    console.log('missing configuration file ' + confFile);
    res.send(500, ''); // we do not give any info to the user
  }).listen(80);
}
