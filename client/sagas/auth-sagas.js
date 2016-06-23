import axios from 'axios';
import { take, call, put, fork } from 'redux-saga/effects';
import * as actionTypes from '../actions/action-types';
import { LOGIN_REGISTER_MODAL } from '../constants';
import API from '../API';

function* userSigninTask(email, password) {
  try {
    yield put({ type: actionTypes.SIGNIN_WAITING });
    const response = yield call(API.AUTH.userSignin, email, password);
    yield put({ type: actionTypes.SIGNIN_SUCCESS, email: response.email });
    yield put({ type: actionTypes.MODAL_CLOSE, modal: LOGIN_REGISTER_MODAL });
    return response.access_token;
  } catch (error) {
    yield put({ type: actionTypes.SIGNIN_ERROR, error: error.data.msg });
  }
}

function* userSignupTask(email, password) {
  try {
    yield put({ type: actionTypes.SIGNUP_WAITING });
    const response = yield call(API.AUTH.userSignup, email, password);
    yield put({ type: actionTypes.SIGNIN_SUCCESS, email: response.email });
    yield put({ type: actionTypes.MODAL_CLOSE, modal: LOGIN_REGISTER_MODAL });
    return response.access_token;
  } catch (error) {
    yield put({ type: actionTypes.SIGNUP_ERROR, error: error.data.msg });
  }
}

function* userSignoutTask(access_token) {
  localStorage.setItem('access_token', access_token);
  axios.defaults.headers.common.Authorization = access_token;
  yield take(actionTypes.SIGNOUT);
  localStorage.removeItem('access_token');
  axios.defaults.headers.common.Authorization = '';
}

function* signinFlow() {
  while (true) {
    const { email, password } = yield take(actionTypes.SIGNIN_REQUEST);
    const access_token = yield call(userSigninTask, email, password);
    if (access_token) {
      yield call(userSignoutTask, access_token);
    }
  }
}

function* signupFlow() {
  while (true) {
    const { email, password } = yield take(actionTypes.SIGNUP_REQUEST);
    const access_token = yield call(userSignupTask, email, password);
    if (access_token) {
      yield call(userSignoutTask, access_token);
    }
  }
}

export default function* authSagas() {
  yield fork(signinFlow);
  yield fork(signupFlow);
}
