import { routerReducer as routing } from 'react-router-redux';
// need to be as routing because react-router-redux api
import { combineReducers } from 'redux';
import CreateTM from './createTM-reducer';
import Modal from './modal-reducer';
import Auth from './auth-reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  routing,
  Modal,
  Auth,
  CreateTM,
  form: formReducer,
});

export default rootReducer;
