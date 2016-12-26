'use strict';

const express = require('express'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  path = require('path'),
  session = require('express-session'),
  passport = require('passport');

/* Setup App */
module.exports = function(config){
  let app = express();

  app.use(express.static(path.join(__dirname, '/../../dist/')));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(session({
    secret: config.sessionSecret,
    resave: true,
    saveUninitialized: true
  }));
  

  app.start = function(){
    const port = config.port;
    app.listen(port, () => console.log(`App running at: http://localhost:${port}`));
  };

  return app;
};
