import { fork } from 'redux-saga/effects';
import authSagas from './auth-sagas';

export default function* root() {
  console.log('saga roooot');
  yield fork(authSagas);
}
