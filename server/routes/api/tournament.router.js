import express from 'express';
import { JWTAuthentication } from '../../config/passport-jwt.js';
import * as actions from '../../controllers/api/tournament.controller';

const tournamentRouter = express.Router();

tournamentRouter.use(JWTAuthentication);

tournamentRouter.route('/')
  .post(actions.createTournament);
tournamentRouter.route('/:tournamentID')
  .get(actions.findTournamentByID);
  //.post(actions.updateTournamentByID);

export default tournamentRouter;
