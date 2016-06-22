import { take, put, fork, call } from 'redux-saga/effects';
import * as actionTypes from '../actions/action-types';
import { UNSELECTED } from '../constants/games';
import API from '../API';

function* tabOneValidation() {
  while (true) {
    const { game } = yield take(actionTypes.SELECT_GAME);
    if (game !== UNSELECTED) {
      yield put({ type: actionTypes.TOGGLE_TAB, tab: 2, disabled: false });
    } else {
      yield put({ type: actionTypes.TOGGLE_TAB, tab: 2, disabled: true });
    }
  }
}

function* userSigninTask(email, password) {
  try {
    yield put({ type: actionTypes.SIGNIN_WAITING });
    const response = yield call(API.AUTH.userSignin, email, password);
    yield put({ type: actionTypes.SIGNIN_SUCCESS, email: response.email });
    yield put({ type: actionTypes.MODAL_CLOSE, modal: SIGNIN_MODAL });
    return response.access_token;
  } catch (error) {
    yield put({ type: actionTypes.SIGNIN_ERROR, error: error.data.msg });
  }
}

function* createTM() {
  while (true) {
    const { game, fields } = yield take(actionTypes.CREATE_TM_REQUEST);
    const response = yield call(API.TOURNAMENT.CreateTM, game, fields);
    console.log(response);
  }
}


// todo: validations for every tab

export default function* createTMSagas() {
  yield fork(tabOneValidation);
  yield fork(createTM);
}
