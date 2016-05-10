import { take, call, put } from 'redux-saga/effects';
import * as actionTypes from '../actions/action-types';
import { SIGNIN_MODAL } from '../constants';
import API from '../API';

function* userLoginTask(email, password) {
  console.log('saga user login task');
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
    console.log(error + 'this is error');
    yield put({ type: actionTypes.SIGNIN_ERROR, error });
  }
}

export default function* authSagas() {
  while (true) {
    const { email, password } = yield take(actionTypes.SIGNIN_REQUEST);
    const access_token = yield call(userLoginTask, email, password);
    if (access_token) {
      localStorage.setItem('token', access_token);
      yield take(actionTypes.SIGNOUT);
      localStorage.removeItem('token');
    }
  }
}
