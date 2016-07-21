import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Home from './components/home';
import CreateTournament from './containers/create-tournament';
import GameList from './containers/game-list';
import FindTournament from './containers/find-tournament';
import Feature from './components/features';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="/create" component={CreateTournament} />
    <Route path="/find" component={GameList} />
    <Route path="/find/:game" component={FindTournament} />
    <Route path="/features" component={Feature} />
  </Route>
);
