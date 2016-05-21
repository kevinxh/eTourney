import { take, put, fork } from 'redux-saga/effects';
import * as actionTypes from '../actions/action-types';
import { UNSELECTED } from '../constants/games';

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

// todo: validations for every tab

export default function* createTMSagas() {
  yield fork(tabOneValidation);
}
