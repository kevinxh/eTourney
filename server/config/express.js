import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import passport from 'passport';
import morgan from 'morgan';
import dev from './dev';
import mainRouter from '../routes/main.router';
import authRouter from '../routes/auth.router';
import { Render } from '../controllers/index.controller';

export default function () {
  const app = express();

  dev(app);

  app.use(express.static(path.join(__dirname, '../../client/assets')));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(passport.initialize());

  if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev'));
  }

  app.use('/', mainRouter);
  app.use('/auth', authRouter);
  app.get('*', Render);

  return app;
}
