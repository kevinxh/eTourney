import { routerReducer as routing } from 'react-router-redux';
// need to be as routing because react-router-redux api
import { combineReducers } from 'redux';
import modal from './modal-reducer';

const rootReducer = combineReducers({
  routing,
  modal,
});

export default rootReducer;
