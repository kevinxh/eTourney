var express = require('express');

module.exports = function() {
  	var router = express.Router();
  	var index = require('../controllers/index.controller');
 
  	router.route('/')
    	.get(index.render);

	//then require other routes.
   
  	return router;
};