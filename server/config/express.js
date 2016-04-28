var express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  passport = require('passport'),
  router = require('../routes/main.router')
  config = require('./secret');

module.exports = function() {

  var app = express();

  if (process.env.NODE_ENV === 'development') {
    //
  } else if (process.env.NODE_ENV === 'production') {
    //
  }

  app.use(express.static(path.join(__dirname, '../../client/assets')));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  app.use(router());
  
  return app;
};