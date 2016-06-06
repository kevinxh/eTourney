import express from 'express';
import { Render } from '../controllers/index.controller';
import authRouter from './auth.router';
import { tournamentRouter, nonvalidTournamentRouter } from './api/tournament.router';
import { fetchHotTournament } from '../controllers/api/fetchht.controoler';

const router = express.Router();

router.get('/', Render);
router.use('/auth', authRouter);
router.get('/hot-tournament', fetchHotTournament);

//REST APIs

router.use('/api/tournaments/hot-tournament', nonvalidTournamentRouter);
router.use('/api/tournaments', tournamentRouter);
router.get('*', Render);

export default router;
