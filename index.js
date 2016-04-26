var express = require('express');
var app = require('./server/server')();

var port = 80;

app.listen(port, function(error) {
  
    //console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
