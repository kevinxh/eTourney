import React, { Component } from 'react';
import GameSublist from '../containers/mainpage_fav_tournament_list';
import BigTournament from '../containers/mainpage_fav_tournament_big';

export default class Home extends Component {
  render() {
    return (
      <div>
      <BigTournament/>
      <GameSublist/>
      </div>
		);
  }
}
