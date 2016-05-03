import { createStore } from 'redux';
import rootReducer from '../reducers/root-reducer';

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    //
    module.hot.accept('../reducers/root-reducer', () => {
      const nextReducer = require('../reducers/root-reducer');
      store.replaceReducer(nextReducer);
    })
  }

  return store;
}