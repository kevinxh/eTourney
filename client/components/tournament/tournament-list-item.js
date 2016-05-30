import React, { Component, PropTypes } from 'react';
import { Image, HelpBlock, Col, Row, Clearfix } from 'react-bootstrap';
import { Link } from 'react-router';

class TournamentListItem extends Component {
  render() {
    let { gid, name, time, type, prize } = this.props.tournament;
    return (
      <div className="tournament-list-item">
        <Link to={'#'}>
          <Image src="http://placehold.it/300x150" rounded responsive />
          <div className="content-area">
            <span>{name}</span>
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
