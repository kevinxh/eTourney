import React, { Component } from 'react';
import Header from '../containers/header';
import GameList from '../containers/game-list'

require('../style/main.scss');

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <GameList />
        this is our app!
        try out the hot reloading man!!
      </div>
		);
  }
}
