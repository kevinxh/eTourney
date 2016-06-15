import React, { Component } from 'react';
import GameList from '../containers/game-list';
import HotTournament from '../containers/hot-tournament';
import Landing from './landing';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Landing />
        <HotTournament
          class="pagination-centered"
        />
        <GameList />
      </div>
		);
  }
}
