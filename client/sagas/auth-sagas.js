import { take, call, put } from 'redux-saga/effects';
import * as actionTypes from '../actions/action-types';
import API from '../API';

function* userLoginTask(email, password) {
  try {
    const token = yield call(API.AUTH.userSignin, email, password);
    yield put({ type: actionTypes.LOGIN_SUCCESS, token });
    return token;
  } catch (error) {
    yield put({ type: actionTypes.LOGIN_ERROR, error });
  }
}

export default function* authSagas() {
  while (true) {
    const { email, password } = yield take(actionTypes.LOGIN_REQUEST);
    const { token, error } = yield call(userLoginTask, email, password);
    if (token) {
      localStorage.setItem('token', token);
      yield take(actionTypes.LOGOUT);
      localStorage.removeItem('token');
    } else if (error) {
      console.log('error: ' + error);
    }
  }
}
