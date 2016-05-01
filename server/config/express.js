var express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  passport = require('passport'),
  config = require('./secret');

var mainRouter = require('../routes/main.router'),
    authRouter = require('../routes/auth.router');

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

  app.use(passport.initialize());

  app.use('/', mainRouter);
  app.use('/auth', authRouter);
  
  return app;
};