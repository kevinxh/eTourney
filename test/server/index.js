import { assert, expect } from 'chai';
import app from '../../server/server';
import testAuth from './auth';
import testTournament from './tournament';

process.env.NODE_ENV = 'test';

export default describe('Auth System unit tests', function () {

  let server = app();

  before((done) => {
    server = server.listen(8080);
    done();
  });

  after((done) => {
    server.close();
    done();
  });

  testAuth();
  testTournament();
});
