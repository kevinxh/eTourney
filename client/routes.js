import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Home from './components/home';
import CreateTournament from './components/create-tournament';
import FindTournament from './components/find-tournament';
import Feature from './components/features';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="/create" component={CreateTournament} />
    <Route path="/find" component={FindTournament} />
    <Route path="/features" component={Feature} />
  </Route>
);
