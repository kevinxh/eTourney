import express from 'express';
import { create } from '../../controllers/api/tournament.controller';
const tournamentRouter = express.Router();

tournamentRouter.post('/', create);

export default tournamentRouter;
