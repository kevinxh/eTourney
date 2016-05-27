import React, { Component, PropTypes } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router';

class TournamentListItem extends Component {
  render() {
    let { name, time, type, prize } = this.props.tournament;
    return (
      <div className="text-center tournament-list-item">
        <div><Link to={'#'}>
          <Image src="http://placehold.it/300x150" thumbnail />
          <h3>{name}</h3>
          <div>Time: {time}</div>
          <div>{type}</div>
          <div>{prize}</div>
        </Link></div>
      </div>
    );
  }
}

TournamentListItem.propTypes = {
  tournament: PropTypes.object.isRequired
};

export default TournamentListItem;
