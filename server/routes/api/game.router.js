import express from 'express';
import { JWTAuthentication } from '../../config/passport-jwt.js';
import * as actions from '../../controllers/api/game.controller';

import multer from 'multer';

const gameRouter = express.Router();

const upload = multer({
  dest: 'server/temp/'
});

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
gameRouter.route('/id/:gameID/image')
  .post(upload.single('image', 1), actions.updateGameImage);

export default gameRouter;
