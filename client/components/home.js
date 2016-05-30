import React, { Component } from 'react';
import GameList from '../containers/game-list';
import HotTournament from '../containers/hot-tournament';

export default class Home extends Component {
  render() {
    return (
      <div>
        <HotTournament
          class="pagination-centered"
        />
        <GameList />


      </div>
		);
  }
}
