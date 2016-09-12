import express from 'express'
import { JWTAuthentication } from '../../config/passport-jwt.js'
import * as actions from '../../controllers/api/game.controller'
import { upload, imageUpload } from '../../middlewares/multer'

const gameRouter = express.Router()

gameRouter.route('/')
  .get(actions.getAllGames)
gameRouter.route('/top')
  .get(actions.getTopGames)
gameRouter.route('/create')
  .post(JWTAuthentication, actions.createGame)
gameRouter.route('/:name')
  .get(actions.findGameByName)
gameRouter.route('/id/:gameID')
  .get(actions.findGameById)
gameRouter.route('/id/:gameID/image')
  .post(JWTAuthentication, imageUpload, actions.updateGameImage)

export default gameRouter
