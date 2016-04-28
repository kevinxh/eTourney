var express = require('./config/express'),
	mongoose = require('./config/mongoose'),
	passport = require('./config/passport');

module.exports = function() {

	var db = mongoose();
	var app = express();
	var	passport = passport();

	return app;
};