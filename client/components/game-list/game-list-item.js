import React, { Component, PropTypes } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router';

class GameListItem extends Component {
  componentWillMount() {
  }
  render() {
    return (
      <div className="text-center game-list-item">
        <div><Link to={`/find/${this.props.game.id}`}><Image src="http://placehold.it/200x300" thumbnail /></Link></div>
        <br />
        <Link to={`/find/${this.props.game.id}`}>{this.props.game.name}</Link>
      </div>
    );
  }
}

GameListItem.propTypes = {
  game: PropTypes.object.isRequired
};

export default GameListItem;
