var User = require('mongoose').model('User'),
	config = require('../config/secret'),
	jwt = require('jsonwebtoken');

exports.login = function(req, res) {

	if (!req.body.email || !req.body.password) {
    	return 	res.json({
    				success: false,
    				msg: 'Please enter your email and password.'
    			});
  	} else {
		User.findOne({
			email: req.body.email
	  	}, function(err, user) {
	    	if (err) 	return 	res.json({
	    							success: false, 
	    							msg: err
	    						});

	    	if (!user) {
	      		return 	res.json({
	      					success: false,
	      					msg: 'Authentication failed. User not found.'
	      				});
	    	} else {
	      	// Check if password matches
	      		user.authenticate(req.body.password, function(err, isMatch) {
	        		if (isMatch) {
	          			// Create token if the password matched and no error was thrown
	          			var token = jwt.sign({email:user.email}, config.JwtSecret, {
	            						expiresIn: 10080 // a week in seconds
	          						});
			          	return 	res.json({
			          				success: true,
			          				email: user.email,
			          				access_token: 'JWT '+token 
			          			});
			        } else {
			          	return 	res.json({
			          				success: false,
			          				msg: 'Authentication failed. Passwords did not match.'
			          			});
			        }
	      		});
	    	}
	  });
	}
  
};

exports.logout = function(req, res) {

  res.json({route:"logout"});
  
};

exports.register = function(req, res) {

  	if (!req.body.email || !req.body.password) {
    	return 	res.json({
    				success: false,
    				msg: 'Please enter your email and password.'
    			});
  	} else {
	    var user = new User({
	      	email: req.body.email,
	      	password: req.body.password,
	    	provider: 'local'
	    });

	    user.save(function(err) {
		      	if (err) {
		      		//todo: we should parse the errs and translate into our language.
		        	return 	res.json({
		        				success: false,
		        				msg:err
		        			});
		      	}
		      	var token = jwt.sign({email:user.email}, config.JwtSecret, {
	            				expiresIn: 10080 // a week in seconds
	          				});
	          	return 	res.json({
	          				success: true,
	          				email: user.email,
	          				access_token: 'JWT '+token 
	          			});
	    });
	}
};