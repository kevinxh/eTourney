import { take, call, put, fork } from 'redux-saga/effects';
import * as actionTypes from '../actions/action-types';
import API from '../API';

function* fetchTournaments() {
  while (true) {
    const { gameID } = yield take(actionTypes.FETCH_TOURNAMENTS);
    const response = yield call(API.TOURNAMENTS.fetchTournaments, gameID);
    // const response = API.GAMES.fetchGames();
    yield put({ type: actionTypes.FETCH_TOURNAMENTS_SUCCESS, data: response });
  }
}

function* createTournament() {
  while (true) {
    const { game, fields } = yield take(actionTypes.CREATE_TOURNAMENT);
    const response = yield call(API.TOURNAMENT.createTournament, game, fields);
    console.log(response);
  }
}

export default function* tournamentsSagas() {
  yield fork(fetchTournaments);
  yield fork(createTournament);
}
