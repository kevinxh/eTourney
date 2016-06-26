import React, { Component, PropTypes } from 'react';
import { Image, HelpBlock, Col, Row, Clearfix } from 'react-bootstrap';
import { Link } from 'react-router';

class TournamentListItem extends Component {
  render() {
    let { _id, gid, tournamentName, time, type, prize } = this.props.tournament;
    return (
      <div className="tournament-list-item">
        <Link to={'#'}>
          <Image src={`https://s3-us-west-2.amazonaws.com/etourney-media/images/tournaments/${_id}.jpg`} rounded responsive />
          <div className="content-area">
            <span>{tournamentName}</span>
            <hr />
            <HelpBlock>Lorem ipsum dolor ...</HelpBlock>
            <Row>
              <Col xs={3}>Game</Col>
              <Col xs={9}>{gid}</Col>
            </Row>
            <Row>
              <Col xs={3}>Time</Col>
              <Col xs={9}>{time}</Col>
            </Row>
            <Row>
              <Col xs={3}>Type</Col>
              <Col xs={9}>{type}</Col>
            </Row>
            <Clearfix />
          </div>
        </Link>
      </div>
    );
  }
}

TournamentListItem.propTypes = {
  tournament: PropTypes.object.isRequired
};

export default TournamentListItem;
