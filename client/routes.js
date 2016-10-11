import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/app'
import Home from './components/home'
// import CreateTournament from './components/create-tournament'

import CreateTournament from './containers/createTM'
import CreateTournamentSearchGame from './components/createTM/createTM-search'
import CreateTournamentGameSettings from './components/createTM/game-settings'

import GameList from './containers/game-list'
import FindTournament from './containers/find-tournament'
import Feature from './components/features'

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="/create" component={CreateTournament}>
      <IndexRoute component={CreateTournamentSearchGame} />
      <Route path="/create/:gameId" component={CreateTournamentGameSettings} />
    </Route>
    <Route path="/find" component={GameList} />
    <Route path="/find/:game" component={FindTournament} />
    <Route path="/features" component={Feature} />
  </Route>
)
