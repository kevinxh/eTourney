import mongoose from './config/mongoose';
import express from './config/express';
import Passport from './config/passport';


module.exports = function(){
	const db = mongoose();
	const app = express();
	const	passport = Passport();

	return app;
};
