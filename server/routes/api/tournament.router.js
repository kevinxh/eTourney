import express from 'express';
import { JWTAuthentication } from '../../config/passport-jwt.js';
import * as actions from '../../controllers/api/tournament.controller';
import { upload, imageUpload } from '../../middlewares/multer';

const tournamentRouter = express.Router();

tournamentRouter.route('/')
  .get(actions.findTournaments);
tournamentRouter.route('/create')
  .post(JWTAuthentication, actions.createTournament);
tournamentRouter.route('/hot')
  .get(actions.fetchHotTournaments);
tournamentRouter.route('/:tournamentID')
  .get(actions.findTournamentByID);
tournamentRouter.route('/:tournamentID/image')
  .post(JWTAuthentication, imageUpload, actions.tournamentImage);
  //.post(actions.updateTournamentByID);

export default tournamentRouter;
