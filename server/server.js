var fs = require('fs')
  , httpProxy = require('http-proxy');

if (fs.existsSync('../../yeswescore-api/server/conf.js')) {
  // configuration
  var Conf = require('../../yeswescore-api/server/conf.js')
    , app = require('./app.js');

  // chargement de la logique de pages
  require('./pages')

  //
  console.log('spawning static server on port ' + Conf.get('www.http.static.port'));
  console.log('spawning proxy server on port ' + Conf.get('www.http.proxy.port'));
  
  // spawning static server
  app.listen(Conf.get('www.http.static.port'));
  
  // spawning proxy server
  httpProxy.createServer(function (req, res, proxy) {
    if (req.url.substr(0, 4) === "/v1/" ||
        req.url.substr(0, 4) === "/v2/" ||
        req.subdomains.indexOf("api") !== -1) {
      console.log('routing ' + req.url + ' to api (port:' + Conf.get("proxy.http.port") + ') ');
      // routing /v1/* => to v1 server
      proxy.proxyRequest(req, res, {
        host: Conf.get("proxy.http.host"),
        port: Conf.get("proxy.http.port")
      });
    } else {
      console.log('routing ' + req.url + ' to local static server (port:' + Conf.get("www.http.static.port") +')');
      // routing /v2/* => to v2 server
      proxy.proxyRequest(req, res, {
        host: Conf.get("www.http.proxy.targethost") || "localhost",
        port: Conf.get("www.http.static.port") || "8080"
      });
    }
  }).listen(Conf.get('www.http.proxy.port'));
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
