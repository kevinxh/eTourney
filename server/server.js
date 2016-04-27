var express = require('./config/express'),
	mongoose = require('./config/mongoose');

module.exports = function() {

	var db = mongoose();
	var app = express();

	return app;
};