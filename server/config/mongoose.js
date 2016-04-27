var	config = require('./secret'),
	mongoose = require('mongoose');

module.exports = function() {
  	var db = mongoose.connect(config.db);

  	Registering the User model
  	require('../models/user');

  	return db;
};