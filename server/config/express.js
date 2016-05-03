import express from 'express';
import path from 'path'
import bodyParser from 'body-parser';
import passport from 'passport';
import morgan from 'morgan';

import config from './secret';

import mainRouter from '../routes/main.router';
import authRouter from '../routes/auth.router';

export default function() {

  const app = express();

  if (process.env.NODE_ENV === 'development') {
    //
  } else if (process.env.NODE_ENV === 'production') {
    //
  }

  app.use(express.static(path.join(__dirname, '../../client/assets')));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(passport.initialize());

  app.use(morgan('combined'));

  app.use(morgan('combined'));

  app.use('/', mainRouter);
  app.use('/auth', authRouter);

  return app;
};
