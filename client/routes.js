import React from 'react';
import { Route } from 'react-router';
import App from './components/app';
import FindTournament from './components/find-tournament';

export default (
  <Route path="/" component={App}>
    <Route path="find" component={FindTournament} />
    {/*<Route path="*" component={App} />*/}
  </Route>
);
