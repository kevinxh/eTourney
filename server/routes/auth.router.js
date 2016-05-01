import express from 'express';
import passport from 'passport';
import {Login, Logout, Register} from '../controllers/auth.controller';

const authRouter = express.Router();
authRouter.post('/login',Login);
authRouter.post('/logout',Logout);
authRouter.post('/register',Register);

export default authRouter;
