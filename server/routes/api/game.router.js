import express from 'express';
import { JWTAuthentication } from '../../config/passport-jwt.js';
import * as actions from '../../controllers/api/game.controller';

const gameRouter = express.Router();

// gameRouter.use(JWTAuthentication);

gameRouter.route('/')
  .get(actions.getAllGames);
gameRouter.route('/top')
  .get(actions.getTopGames);
gameRouter.route('/create')
  .post(actions.createGame);
gameRouter.route('/:name')
  .get(actions.findGameByName);
gameRouter.route('/id/:gameID')
  .get(actions.findGameById);

export default gameRouter;
