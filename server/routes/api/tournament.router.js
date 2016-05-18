import express from 'express';
import { JWTAuthentication } from '../../config/passport-jwt.js';
import { create } from '../../controllers/api/tournament.controller';

const tournamentRouter = express.Router();

tournamentRouter.use(JWTAuthentication);

tournamentRouter.post('/', create);

export default tournamentRouter;
