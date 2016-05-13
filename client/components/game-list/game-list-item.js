import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

class GameListItem extends Component {
  componentWillMount() {
  }
  render() {
    return (
      <div className="text-center">
        <Image src="http://lorempixel.com/200/400" thumbnail />
        <a href="#">{this.props.game.name}</a>
      </div>
    );
  }
}

export default GameListItem;
