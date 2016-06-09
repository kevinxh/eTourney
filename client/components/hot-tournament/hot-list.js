import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import { Image, HelpBlock, Col, Row, Clearfix } from 'react-bootstrap';
import { Link } from 'react-router';
import CollapsiblePanel from './collapsible-panel';


export default class HotList extends Component {

  renderSubList1() {
    if (this.props.hotTournaments){
      var FIRST_ROW_COUNTER = 0;
      return this.props.hotTournaments.map(
        (tournament) => {
          if (FIRST_ROW_COUNTER < 4) {
            FIRST_ROW_COUNTER = FIRST_ROW_COUNTER + 1;
            return (
              <Col xs={6} md={3} key={tournament.tournamentName}>
                <div className="tournament-list-item">
                  <Link to={'#'}>
                    <Image src="http://placehold.it/300x150" rounded responsive />
                    <div className="content-area">
                      <span>{tournament.tournamentName}</span>
                      <hr />
                      <HelpBlock>巴拉巴拉拉小魔仙</HelpBlock>
                      <Row>
                        <Col xs={3}>Game</Col>
                        <Col xs={9}>{tournament.tournamentName}</Col>
                      </Row>
                      <Row>
                        <Col xs={3}>Time</Col>
                        <Col xs={9}>{tournament.created}</Col>
                      </Row>
                      <Row>
                        <Col xs={3}>Type</Col>
                        <Col xs={9}>{tournament.creatorEmail}</Col>
                      </Row>
                      <Clearfix />
                    </div>
                  </Link>
                </div>
              </Col>
          );
          }
        }
      );
    }
  }

  renderSubList2() {
    if (this.props.hotTournaments){
      var FIRST_ROW_COUNTER = 0;
      return this.props.hotTournaments.map(
        (tournament) => {
          FIRST_ROW_COUNTER = FIRST_ROW_COUNTER + 1;
          if (FIRST_ROW_COUNTER > 4 && FIRST_ROW_COUNTER < 8) {
            return (
              <Col xs={6} md={3} key={tournament.tournamentName}>
                <div className="tournament-list-item">
                  <Link to={'#'}>
                    <Image src="http://placehold.it/300x150" rounded responsive />
                    <div className="content-area">
                      <span>{tournament.tournamentName}</span>
                      <hr />
                      <HelpBlock>巴拉巴拉拉小魔仙</HelpBlock>
                      <Row>
                        <Col xs={3}>Game</Col>
                        <Col xs={9}>{tournament.tournamentName}</Col>
                      </Row>
                      <Row>
                        <Col xs={3}>Time</Col>
                        <Col xs={9}>{tournament.created}</Col>
                      </Row>
                      <Row>
                        <Col xs={3}>Type</Col>
                        <Col xs={9}>{tournament.creatorEmail}</Col>
                      </Row>
                      <Clearfix />
                    </div>
                  </Link>
                </div>
              </Col>
          );
          }
        }
      );
    }
  }

  render() {
    return (
      <div>
        <Grid>
          <h1 className="text-center underlined-headings">
            Recommended Tournaments
          </h1>
          {/*<Row>
            {this.renderSubList1()}
          </Row>*/}
        </Grid>
        <Grid>
          <Row>
            <CollapsiblePanel
              tournament1={this.renderSubList1()}
              tournament={this.renderSubList2()}/>
          </Row>
        </Grid>
      </div>
    );
  }
}
