import express from 'express';
import { JWTAuthentication } from '../config/passport-jwt.js';
import { Login, Logout, Register } from '../controllers/auth.controller';

const authRouter = express.Router();
authRouter.post('/login', Login);
authRouter.post('/logout', Logout);
authRouter.post('/register', Register);

// for testing jwt
authRouter.get('/test', JWTAuthentication, (req, res) => {
  res.send(`It worked! you are: ${req.user.email}`);
});

export default authRouter;
