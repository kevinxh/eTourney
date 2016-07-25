import React, { Component, PropTypes } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router';

class GameListItem extends Component {
  componentWillMount() {
  }
  render() {
    const { game, link } = this.props;
    let area = <Image src={`https://s3-us-west-2.amazonaws.com/etourney-media/images/games/${game._id}.jpg`} responsive />;
    if (link) {
      area = <Link to={link}>{area}</Link>;
    }
    return (
      <div className="text-center game-list-item">
        <div>
          {area}
        </div>
      </div>
    );
  }
}

GameListItem.propTypes = {
  game: PropTypes.object.isRequired,
  link: PropTypes.string
};

export default GameListItem;
