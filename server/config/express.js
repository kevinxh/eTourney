import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import passport from 'passport';
import morgan from 'morgan';
import dev from './dev';
import aws from './aws';
import router from '../routes';

export default function () {
  const app = express();

  dev(app);
  aws();

  app.use(express.static(path.join(__dirname, '../../client/assets')));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(passport.initialize());

  if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev'));
  }

  app.use('/', router);

  return app;
}
