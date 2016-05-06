import { assert, expect } from 'chai';
import request from 'request';
import User from '../../server/models/user';
import app from '../../server/server';

process.env.NODE_ENV = 'test';

describe('Auth System unit tests', function () {
  this.timeout(5000);
  const config = {
    validAuth: {
      email: 'test@gmail.com',
      password: 'justsomepassword'
    },
    endPoints: {
      register: 'http://localhost:8080/auth/register',
      login: 'http://localhost:8080/auth/login',
      testing: 'http://localhost:8080/auth/test'
    }
  };
  let server = app();
  before((done) => {
    server = server.listen(8080);
    done();
  });
  after((done) => {
    User.remove({ email: config.validAuth.email }, () => {
      console.log('Testing account removed');
      server.close();
      done();
    });
  });
  describe('Register', () => {
    it('without email or password', (done) => {
      request.post(config.endPoints.register, {
        form: { email: '', password: '' }
      }, (err, resp, body) => {
        assert(JSON.parse(body).msg === 'Please enter your email and password.',
        'Should return "Please enter your email and password."');
        done();
      });
    });
    it('with invalid email form (eg. without "@")', (done) => {
      request.post(config.endPoints.register, {
        form: { email: 'aljkljalksjdl', password: 'lelja' }
      }, (err, resp, body) => {
        assert(JSON.parse(body).msg.errors.email.properties.message
        === 'Please fill a valid e-mail address',
        'Should return "Please fill a valid e-mail address"');
        done();
      });
    });
    it('invalid password length (length < 6)', (done) => {
      request.post(config.endPoints.register, {
        form: { email: 'test@gmail.com', password: 'as.1' }
      }, (err, resp, body) => {
        assert(JSON.parse(body).msg.errors.password.properties.message
        === 'Password should be longer',
        'Should return "Password should be longer"');
        done();
      });
    });
    it('should succeed with valid email and valid password (eg. without "@")', (done) => {
      request.post(config.endPoints.register, {
        form: config.validAuth
      }, (err, resp, body) => {
        assert(JSON.parse(body).success === true,
        'Should return true status and successfully register');
        done();
      });
    });
    it('should fail registering when email is already in use', (done) => {
      request.post(config.endPoints.register, {
        form: config.validAuth
      }, (err, resp, body) => {
        // TODO: Valid error message needs to be used as validation here
        assert(JSON.parse(body).success === false,
        'Should fail registering and success status == false');
        done();
      });
    });
  });

  describe('Login', () => {
    it('without password or password', (done) => {
      request.post(config.endPoints.login, {
        form: { email: '', password: '' }
      }, (err, resp, body) => {
        assert(JSON.parse(body).msg === 'Please enter your email and password.',
        'Should return "Please enter your email and password."');
        done();
      });
    });
    it('with nonexisting user', (done) => {
      request.post(config.endPoints.login, {
        form: {
          // TODO: Replace the prefix with a GUID generated string
          email: '864f6de4875a4ef5abc204f2026a30a7@gmail.com',
          password: 'abc123'
        }
      }, (err, resp, body) => {
        assert(JSON.parse(body).msg === 'Authentication failed. User not found.',
        'Should return "Authentication failed. User not found."');
        done();
      });
    });
    it('with existing user but wrong password', (done) => {
      request.post(config.endPoints.login, {
        form: {
          email: config.validAuth.email,
          // TODO: Replace the string here with a GUID generated string
          password: 'ljals;dfku;l1kjmv'
        }
      }, (err, resp, body) => {
        assert(JSON.parse(body).msg === 'Authentication failed. Passwords did not match.',
        'Should return "Authentication failed. Passwords did not match."');
        done();
      });
    });
    it('with correct auth', (done) => {
      request.post(config.endPoints.login, {
        form: config.validAuth
      }, (err, resp, body) => {
        const parsedBody = JSON.parse(body);
        assert(parsedBody.success === true, 'Should return true status');
        assert(parsedBody.email === config.validAuth.email,
          'Should contain registered email');
        expect(parsedBody).to.include.keys('access_token');
        done();
      });
    });
  });

  describe('Test Authentication Routes', () => {
    // let tokenedRequest;
    // // set the JWTtoken before the tests here start
    // before((done) => {
    //   request.post(config.endPoints.login, {
    //     form: config.validAuth
    //   }, (err, resp, body) => {
    //     const parsedBody = JSON.parse(body);
    //     assert(parsedBody.success === true, 'Should return true status');
    //     expect(parsedBody).to.include.keys('access_token');
    //     tokenedRequest = request.defaults({
    //       headers: { Authorization: parsedBody.access_token }
    //     });
    //     done();
    //   });
    // });

    it('with no JWTtoken or anything', (done) => {
      // Use default request object here
      request.get(config.endPoints.testing, (err, resp, body) => {
        expect(resp.statusCode, 'Status should be 401').to.equal(401);
        expect(body, 'Body should only contain "Unauthorized"').to
          .equal('Unauthorized');
        done();
      });
    });

    it('with wrong JWTtoken', (done) => {
      request.get({
        url: config.endPoints.testing,
        headers: {
          Authorization: 'JWT jl1kjkmkl12j311!@#Falmsmlm'
        }
      }, (err, resp, body) => {
        expect(resp.statusCode, 'Status should be 401').to.equal(401);
        expect(body, 'Body should only contain "Unauthorized"').to
          .equal('Unauthorized');
        done();
      });
    });
  });
});