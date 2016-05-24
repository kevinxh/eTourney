import { take, call, put, fork } from 'redux-saga/effects';
import * as actionTypes from '../actions/action-types';
import API from '../API';

function* fetchTournaments() {
  while (true) {
    const { gameID } = yield take(actionTypes.FETCH_TOURNAMENTS);
    const response = yield call(API.TOURNAMENTS.fetchTournaments, gameID);
    // const response = API.GAMES.fetchGames();
    yield put({ type: actionTypes.FETCH_TOURNAMENTS, data: response });
  }
}

export default function* authSagas() {
  yield fork(fetchTournaments);
}
