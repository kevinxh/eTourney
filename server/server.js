var	mongoose = require('./config/mongoose'),
	express = require('./config/express'),
	Passport = require('./config/passport');

module.exports = function() {

	var db = mongoose();
	var app = express();
	var	passport = Passport();

	return app;
};