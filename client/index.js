import React from 'react';
import ReactDom from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import Root from './containers/Root';

if (module.hot) {
    // accept itself
  module.hot.accept();
}

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);


ReactDom.render(
  <Root store={store} history={history} />,
	document.getElementById('app')
);
