import { routerReducer as routing } from 'react-router-redux';
// need to be as routing because react-router-redux api
import { combineReducers } from 'redux';
import Modal from './modal-reducer';
import Auth from './auth-reducer';
import mainPageGames from './reducer_mainpagegames'

const rootReducer = combineReducers({
  routing,
  Modal,
  Auth,
  mainPageGames,
});

export default rootReducer;
