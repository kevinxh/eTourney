import React, { Component } from 'react';
import Header from '../containers/header';
import GameList from '../containers/game-list'

require('../style/main.scss');

export default class App extends Component {
  render() {
    return (
      <div>
        <GameList />
        <Header />
        {this.props.children}
      </div>
		);
  }
}
