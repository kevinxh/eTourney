var	config = require('./secret'),
	User = require('../models/user'),
	mongoose = require('mongoose');

module.exports = function() {
  	var db = mongoose.connect(config.db_connection_url);

  	//Registering the User model
  	//require('../models/user');

  	return db;
};