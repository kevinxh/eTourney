import { createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware()
  const routingMiddleware = routerMiddleware(browserHistory)
  const store = createStore(
                  rootReducer,
                  initialState,
                  compose(applyMiddleware(sagaMiddleware, routingMiddleware),
                    window.devToolsExtension ? window.devToolsExtension() : f => f)
                )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = rootReducer
      store.replaceReducer(nextReducer)
    })
  }

  return {
    store,
    runSaga: sagaMiddleware.run,
  }
}
