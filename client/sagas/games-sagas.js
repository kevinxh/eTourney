import { take, call, put, fork } from 'redux-saga/effects'
import * as actionTypes from '../actions/action-types'
import API from '../API'

function* fetchGames() {
  while (true) {

    const { gameName } = yield take(actionTypes.FETCH_GAMES)
    const response = yield call(API.GAMES.fetchGames, gameName)
    // const response = API.GAMES.fetchGames();
    yield put({ type: actionTypes.FETCH_GAMES_SUCCESS, data: response })
  }
}

function* fetchTopGames() {
  while (true) {
    yield take(actionTypes.FETCH_TOP_GAMES)
    const response = yield call(API.GAMES.fetchTopGames)
    yield put({ type: actionTypes.FETCH_GAMES_SUCCESS, data: response })
  }
}

function* fetchGame() {
  while (true) {
    const { gameId } = yield take(actionTypes.SELECT_GAME)
    const response = yield call(API.GAMES.fetchGame, gameId)
    yield put({ type: actionTypes.SELECT_GAME_SUCCESS, data: response })
  }
}

export default function* gamesSagas() {
  yield fork(fetchGames)
  yield fork(fetchGame)
  yield fork(fetchTopGames)
}
