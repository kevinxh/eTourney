import { take, call, put, fork } from 'redux-saga/effects';
import * as actionTypes from '../actions/action-types';
import API from '../API';

function* fetchGames() {
  while (true) {
    yield take(actionTypes.FETCH_GAMES);
    const response = yield call(API.GAMES.fetchGames);
    // const response = API.GAMES.fetchGames();
    yield put({ type: actionTypes.FETCH_GAMES, data: response });
  }
}

export default function* authSagas() {
  yield fork(fetchGames);
}
