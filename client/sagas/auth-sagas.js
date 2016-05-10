import { take, call, put, fork } from 'redux-saga/effects';
import * as actionTypes from '../actions/action-types';
import { SIGNIN_MODAL, SIGNUP_MODAL } from '../constants';
import API from '../API';

function* userSigninTask(email, password) {
  try {
    yield put({ type: actionTypes.SIGNIN_WAITING });
    const response = yield call(API.AUTH.userSignin, email, password);
    if (response.success === false) {
      yield put({ type: actionTypes.SIGNIN_ERROR, error: response.msg });
    } else {
      yield put({ type: actionTypes.SIGNIN_SUCCESS });
      yield put({ type: actionTypes.MODAL_CLOSE, modal: SIGNIN_MODAL });
      return response.access_token;
    }
  } catch (error) {
    yield put({ type: actionTypes.SIGNIN_ERROR, error });
  }
}

function* signinFlow() {
  while (true) {
    const { email, password } = yield take(actionTypes.SIGNIN_REQUEST);
    const access_token = yield call(userSigninTask, email, password);
    if (access_token) {
      localStorage.setItem('token', access_token);
      yield take(actionTypes.SIGNOUT);
      localStorage.removeItem('token');
    }
  }
}

function* userSignupTask(email, password) {
  try {
    yield put({ type: actionTypes.SIGNUP_WAITING });
    const response = yield call(API.AUTH.userSignup, email, password);
    if (response.success === false) {
      yield put({ type: actionTypes.SIGNUP_ERROR, error: response.msg });
    } else {
      yield put({ type: actionTypes.SIGNIN_SUCCESS });
      yield put({ type: actionTypes.MODAL_CLOSE, modal: SIGNUP_MODAL });
      return response.access_token;
    }
  } catch (error) {
    yield put({ type: actionTypes.SIGNUP_ERROR, error });
  }
}

function* signupFlow() {
  while (true) {
    const { email, password } = yield take(actionTypes.SIGNUP_REQUEST);
    const access_token = yield call(userSignupTask, email, password);
    if (access_token) {
      localStorage.setItem('token', access_token);
      yield take(actionTypes.SIGNOUT);
      localStorage.removeItem('token');
    }
  }
}

export default function* authSagas() {
  yield fork(signinFlow);
  yield fork(signupFlow);
}
