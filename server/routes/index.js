import express from 'express';
import { Render } from '../controllers/index.controller';
import authRouter from './auth.router';
import tournamentRouter from './api/tournament.router';
import gameRouter from './api/game.router';

const router = express.Router();

router.get('/', Render);
router.use('/auth', authRouter);

// REST APIs
router.use('/api/tournaments', tournamentRouter);
router.use('/api/games', gameRouter);
router.get('*', Render);

export default router;
