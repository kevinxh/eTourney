var User = require('mongoose').model('User'),
  passport = require('passport');

exports.login = function(req, res) {
	passport.authenticate('local')
  
};

exports.logout = function(req, res) {

  res.json({route:"logout"});
  
};

exports.register = function(req, res) {

  if (!req.user) {

  	if (!req.body.email || !req.body.password) {
    	res.json({success: false, msg: 'Please include your email and password.'});
  	} else {
	    var user = new User({
	      email: req.body.email,
	      password: req.body.password,
	      provider: 'local'
	    });

	    user.save(function(err) {
	      if (err) {
	        return res.json({success: false, err:err});
	      }
	      req.login(user, function(err) {
	        if (err) return next(err);
	        return res.json({success: true, email:user.email});
	      });
	    });
	}
  } else {
    return res.json({success: false, msg:'You already logged in.', email:req.user.email});
  }
  
};