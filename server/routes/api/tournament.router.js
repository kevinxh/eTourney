import express from 'express';
import { JWTAuthentication } from '../../config/passport-jwt.js';
import { create, find } from '../../controllers/api/tournament.controller';

const tournamentRouter = express.Router();

tournamentRouter.use(JWTAuthentication);

tournamentRouter.post('/', create);
tournamentRouter.get('/:tournamentName', find);

export default tournamentRouter;
