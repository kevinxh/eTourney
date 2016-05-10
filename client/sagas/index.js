import { fork } from 'redux-saga/effects';
import authSagas from './auth-sagas';

export default function* root() {
  yield fork(authSagas);
}
