import { take, call, put, fork } from 'redux-saga/effects'
import * as actionTypes from '../actions/action-types'
import API from '../API'

function* fetchTournaments() {
  while (true) {
    const { gameID } = yield take(actionTypes.FETCH_TOURNAMENTS)
    const response = yield call(API.TOURNAMENTS.fetchTournaments, gameID)
    console.log(response);
    // todo handle failed responses.
    // const response = API.GAMES.fetchGames();
    yield put({ type: actionTypes.FETCH_TOURNAMENTS_SUCCESS, data: response.data })
  }
}

function* fetchHotTournaments() {
  yield take(actionTypes.HOT_TOURNAMENT_FETCH)
  const response = yield call(API.TOURNAMENTS.fetchHotTournament) // todo handle failed responses.
  yield put({ type: actionTypes.FETCH_HOTTOURNAMENT_SUCCESS, data: response })
}

export default function* tournamentsSagas() {
  yield fork(fetchTournaments)
  yield fork(fetchHotTournaments)
}
