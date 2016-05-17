import React, { Component, PropTypes } from 'react';
import { Image } from 'react-bootstrap';

class GameListItem extends Component {
  componentWillMount() {
  }
  render() {
    return (
      <div className="text-center game-list-item">
        <div><a href={'#'.concat(this.props.game.name)}><Image src="http://placehold.it/200x300" thumbnail /></a></div>
        <br />
        <a href={'#'.concat(this.props.game.name)}>{this.props.game.name}</a>
      </div>
    );
  }
}

GameListItem.propTypes = {
  game: PropTypes.object.isRequired
};

export default GameListItem;
