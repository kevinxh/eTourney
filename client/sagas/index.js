import { fork } from 'redux-saga/effects'
import authSagas from './auth-sagas'
import gamesSagas from './games-sagas'
import tournamentsSagas from './tournaments-sagas'

export default function* root() {
  yield fork(authSagas)
  yield fork(gamesSagas)
  yield fork(tournamentsSagas)
}
