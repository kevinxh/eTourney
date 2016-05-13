import React, { Component, PropTypes } from 'react';
import { Image } from 'react-bootstrap';

class GameListItem extends Component {
  componentWillMount() {
  }
  render() {
    return (
      <div className="text-center game-list-item">
        <div><a href={'#'.concat(this.props.game.name)}><Image src="http://lorempixel.com/200/300" thumbnail /></a></div>
        <a href={'#'.concat(this.props.game.name)}>{this.props.game.name}</a>
      </div>
    );
  }
}

GameListItem.propTypes = {
  game: PropTypes.object.isRequired
};

export default GameListItem;
