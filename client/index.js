import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import configureStore from './store/configureStore'

module.hot.accept();
const store = configureStore();


ReactDom.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
			</Route>
		</Router>
	</Provider>
	,document.getElementById('app')
);

