import React, { Component } from 'react';
import Collapsible_panel from './Collapsible-panel';

import Grid from 'react-bootstrap/lib/Grid';
import { Image, HelpBlock, Col, Row, Clearfix } from 'react-bootstrap';
import { Link } from 'react-router';

export default class HotList extends Component {

  renderSubList1() {
    if (this.props.hotTournaments){
      var first_row_counter=0;
      return this.props.hotTournaments.map(
        (tournament) => {
          if (first_row_counter<4){
            first_row_counter=first_row_counter+1;
            return (
            <Col xs={6} md={3} key={tournament}>
              <div className="tournament-list-item">
                <Link to={'#'}>
                  <Image src="http://placehold.it/300x150" rounded responsive />
                  <div className="content-area">
                    <span>{tournament}</span>
                    <hr />
                    <HelpBlock>巴拉巴拉拉小魔仙</HelpBlock>
                    <Row>
                      <Col xs={3}>Game</Col>
                      <Col xs={9}>{tournament}</Col>
                    </Row>
                    <Row>
                      <Col xs={3}>Time</Col>
                      <Col xs={9}>{tournament}</Col>
                    </Row>
                    <Row>
                      <Col xs={3}>Type</Col>
                      <Col xs={9}>{tournament}</Col>
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
      var first_row_counter=0;
      return this.props.hotTournaments.map(
        (tournament) => {
          first_row_counter=first_row_counter+1;
          if (first_row_counter>4&&first_row_counter<8){
            return (
            <Col xs={6} md={3} key={tournament}>
              <div className="tournament-list-item">
                <Link to={'#'}>
                  <Image src="http://placehold.it/300x150" rounded responsive />
                  <div className="content-area">
                    <span>{tournament}</span>
                    <hr />
                    <HelpBlock>巴拉巴拉拉小魔仙</HelpBlock>
                    <Row>
                      <Col xs={3}>Game</Col>
                      <Col xs={9}>{tournament}</Col>
                    </Row>
                    <Row>
                      <Col xs={3}>Time</Col>
                      <Col xs={9}>{tournament}</Col>
                    </Row>
                    <Row>
                      <Col xs={3}>Type</Col>
                      <Col xs={9}>{tournament}</Col>
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
            <Collapsible_panel
              tournament1={this.renderSubList1()}
              tournament={this.renderSubList2()}/>
          </Row>
        </Grid>
      </div>
    );
  }
}
