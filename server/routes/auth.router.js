var express = require('express'),
	passport = require('passport');

var authRouter = express.Router();
var auth = require('../controllers/auth.controller');
 
authRouter.post('/login',auth.login);
authRouter.post('/logout',auth.logout);
authRouter.post('/register',auth.register);

//for testing jwt
authRouter.get('/test', passport.authenticate('jwt', { session: false }), function(req, res) {
  	res.send('It worked! you are:' + req.user.email);
});

module.exports = authRouter;