import {assert} from 'chai';
import request from 'request';

describe('Register', ()=> {
  it('without email or password', (done)=> {
    request.post('http://localhost:8080/auth/register',{
      form: {
        email: '',
        password: ''
      }
    },(err,resp,body) => {
      assert(JSON.parse(body).msg === 'Please enter your email and password.',
       'Should return false status');
      done();
    })

  });
  it('with invalid email form (eg. without "@")', (done) => {
    request.post('http://localhost:8080/auth/register',{
      form: {
        email: 'aljkljalksjdl',
        password: 'lelja'
      }
    },(err,resp,body) => {
      assert(JSON.parse(body).msg.errors.email.properties.message === 'Please fill a valid e-mail address',
       'Should return false status');
      done();
    })
  })
  it('invalid password length (length < 6)', (done) => {
    request.post('http://localhost:8080/auth/register',{
      form: {
        email: 'test@gmail.com',
        password: 'as.1'
      }
    },(err,resp,body) => {
      assert(JSON.parse(body).msg.errors.password.properties.message === 'Password should be longer',
       'Should return false status');
      done();
    })
  })
  it('should succeed with valid email and valid password (eg. without "@")', (done) => {
    request.post('http://localhost:8080/auth/register',{
      form: {
        email: 'test@gmail.com',
        password: 'justsomepassword'
      }
    },(err,resp,body) => {
      console.log(body);
      assert(JSON.parse(body).success === false, 'Should return false status');
      done();
    })
  })
});
