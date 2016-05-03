import User from '../models/user';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import config from '../config/secret';

export function Login(req, res) {

	if (!req.body.email || !req.body.password) {
    	return 	res.status(400).json({
    				success: false,
    				msg: 'Please enter your email and password.'
    			});
  	} else {
		User.findOne({ email: req.body.email }, (err, user)=> {
	    	if (err) 	return 	res.status(403).json({
	    							success: false,
	    							msg: err
	    						});

	    	if (!user) {
	      		return 	res.status(401).json({
	      					success: false,
	      					msg: 'Authentication failed. User not found.'
	      				});
	    	} else {
	      	// Check if password matches
	      		user.authenticate(req.body.password, (err, isMatch) => {
	        		if (isMatch) {
	          			// Create token if the password matched and no error was thrown
	          			var token = jwt.sign({email:user.email}, config.JwtSecret, {
	            						expiresIn: 10080 // a week in seconds
	          						});
			          	return 	res.status(200).json({
			          				success: true,
			          				email: user.email,
			          				access_token: 'JWT '+token
			          			});
			        } else {
			          	return 	res.status(401).json({
			          				success: false,
			          				msg: 'Authentication failed. Passwords did not match.'
			          			});
			        }
	      		});
	    	}
	  });
	}

};

export function Logout(req, res){ res.json({route:"logout"}); };

export function Register(req, res){

  	if (!req.body.email || !req.body.password) {
    	return 	res.status(400).json({
    				success: false,
    				msg: 'Please enter your email and password.'
    			});
  	} else {
	    const user = new User({
	      	email: req.body.email,
	      	password: req.body.password,
	    	provider: 'local'
	    });
	    user.save((err) => {
		      	if (err) {
		      		//todo: we should parse the errs and translate into our language.
		        	return 	res.status(401).json({
		        				success: false,
		        				msg:err
		        			});
		      	}
		      	const token = jwt.sign({email:user.email}, config.JwtSecret, {
	            				expiresIn: 10080 // a week in seconds
	          				});
	          	return 	res.status(201).json({
	          				success: true,
	          				email: user.email,
	          				access_token: 'JWT '+token
	          			});
	    });
	}
};
