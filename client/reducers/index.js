import { routerReducer as routing } from 'react-router-redux';
// need to be as routing because react-router-redux api
import { combineReducers } from 'redux';
import Games from './games-reducer';
import CreateTM from './createTM-reducer';
import Modal from './modal-reducer';
import Auth from './auth-reducer';
import Hot from './hot-reducer';

const rootReducer = combineReducers({
  routing,
  Modal,
  Auth,
  Games,
  CreateTM,
  Hot,
});

export default rootReducer;
