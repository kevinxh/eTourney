var express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  router = require('../routes/main.router');

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

  app.use(router());
  
  return app;
};