var express = require('express')
  , app = express();

var Conf = require('../../yeswescore-api/server/conf.js');

app.use('/static/files', express.static('/home/node/static/files'));
app.use(express.static('/opt/web/chromecast'));
app.listen(Conf.get("www.http.static.port") || "8080");
