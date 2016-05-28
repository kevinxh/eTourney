import express from 'express';
import { Render } from '../controllers/index.controller';
import authRouter from './auth.router';
import tournamentRouter from './api/tournament.router';

const router = express.Router();

router.get('/', Render);
router.use('/auth', authRouter);

//REST APIs
router.use('/api/tournaments', tournamentRouter);

router.get('*', Render);

export default router;
