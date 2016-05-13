import React, { Component } from 'react';
import Header from '../containers/header';
import GameSublist from '../containers/mainpage_fav_tournament_list';
import BigTournament from '../containers/mainpage_big_tournament';
require('../style/main.scss');

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
      <BigTournament/>
      <GameSublist/>
        {this.props.children}


      </div>
		);
  }
}
