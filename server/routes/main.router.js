import express from 'express';
import {Render} from'../controllers/index.controller';

const mainRouter = express.Router();

mainRouter.get('/', Render);

export default mainRouter;
