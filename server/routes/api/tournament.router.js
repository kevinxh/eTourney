import express from 'express';
import { JWTAuthentication } from '../../config/passport-jwt.js';
import * as actions from '../../controllers/api/tournament.controller';
import { fetchHotTournament } from '../../controllers/api/fetchht.controller';
import { upload, imageUpload } from '../../middlewares/multer';

export const nonvalidTournamentRouter = express.Router();
nonvalidTournamentRouter.get('/hot-tournament', fetchHotTournament);


export const tournamentRouter = express.Router();

//tournamentRouter.use(JWTAuthentication);

tournamentRouter.route('/')
  .get(actions.findTournaments);
tournamentRouter.route('/create')
  .post(JWTAuthentication, actions.createTournament);
tournamentRouter.route('/:tournamentID')
  .get(actions.findTournamentByID);
tournamentRouter.route('/:tournamentID/image')
  .post(JWTAuthentication, imageUpload, actions.tournamentImage);
  //.post(actions.updateTournamentByID);



// export default tournamentRouter;
