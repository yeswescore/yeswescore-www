var express = require("express")
  , app = express()
  , Conf    = require('../../yeswescore-api/server/conf.js')
  , winston = require("winston")
  , ejs = require('ejs');
  
app.use(express.compress());
// security
app.use(function (req, res, next) {
  app.disable('x-powered-by');
  res.setHeader('X-Powered-By', 'PHP/5.2.4-2freebsd'); // fake headers, but shouldn't be the same in dev & prod.
  next();
});

// using ejs
app.configure(function() {
    app.set('views', __dirname + '/public');
});
app.engine('html', ejs.renderFile);

//
var logsPath = Conf.get("www.logs.path");
// definition of access, default & stats loggers.
var logs = {
  access : {
    file: {
      filename: logsPath+'access.log',
      maxsize: 104857600 // = 100 Mo
    }
  },
  info: {
    file: {
      filename: logsPath+'info.log',
      maxsize: 104857600, // = 100 Mo
      timestamp: true
    }
  }
};

if (Conf.get("env") === "DEV") {
  // IN DEV ENVIRONMENT => CONSOLE LOGS !
  logs.access["console"] = {
    level: 'info',
    colorize: true,
  };
  logs.info["console"] = {
    level: 'info',
    colorize: 'true',
    timestamp: true
  };
}

// creating logs !
Object.keys(logs).forEach(function (category) {
  winston.loggers.add(category, logs[category]);
});

// AUTO LOG ACCESS
var accessLogger = winston.loggers.get('access');
var winstonStream = {
    write: function(message, encoding){
        accessLogger.info(message);
    }
};
app.use(express.logger({stream:winstonStream}));

// static
if (Conf.get("env") === "DEV") {
  app.use('/static', express.static(__dirname + '/private'));
}
app.use('/static', express.static(__dirname + '/public'));

module.exports = app;
