var express = require('express'),
	passport = require('passport');

var authRouter = express.Router();
var auth = require('../controllers/auth.controller');
 
authRouter.post('/login',auth.login);
authRouter.post('/logout',auth.logout);
authRouter.post('/register',auth.register);

module.exports = authRouter;