import React, { Component, PropTypes } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router';

class GameListItem extends Component {
  componentWillMount() {
  }
  render() {
    return (
      <div className="text-center game-list-item">
        <div><Link to={`/find/${this.props.game._id}`}><Image src="http://placehold.it/400x300" responsive /></Link></div>
      </div>
    );
  }
}

GameListItem.propTypes = {
  game: PropTypes.object.isRequired
};

export default GameListItem;
