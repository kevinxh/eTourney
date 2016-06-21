import express from 'express';
import { JWTAuthentication } from '../../config/passport-jwt.js';
import * as actions from '../../controllers/api/game.controller';
import { S3, S3BUCKET } from '../../config/aws';

import multer from 'multer';

const gameRouter = express.Router();

const upload = multer({
  // storage: multerS3({
  //   s3: S3,
  //   bucket: S3BUCKET,
  //   metadata: (req, file, cb) => {
  //     cb(null, { fieldName: file.fieldname });
  //   },
  //   key: (req, file, cb) => {
  //     cb(null, Date.now().toString());
  //   }
  // })
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
  .post(upload.array('image', 1), actions.updateGameImage);

export default gameRouter;
