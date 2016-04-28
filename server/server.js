var express = require('./config/express'),
	mongoose = require('./config/mongoose'),
	Passport = require('./config/passport');

module.exports = function() {

	var db = mongoose();
	var app = express();
	var	passport = Passport();

	return app;
};