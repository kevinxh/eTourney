import express from 'express';
import passport from 'passport';
import {Login, Logout, Register} from '../controllers/auth.controller';

const authRouter = express.Router();
authRouter.post('/login',Login);
authRouter.post('/logout',Logout);
authRouter.post('/register',Register);

//for testing jwt
authRouter.get('/test', passport.authenticate('jwt', { session: false }), (req, res) => {
  	res.send('It worked! you are:' + req.user.email);
});

export default authRouter;
