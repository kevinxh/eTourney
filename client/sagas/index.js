import { fork } from 'redux-saga/effects';
import authSagas from './auth-sagas';
import createTMSagas from './createTM-sagas';

export default function* root() {
  yield fork(authSagas);
  yield fork(createTMSagas);
}
