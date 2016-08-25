import React, { Component, PropTypes } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import { Image, HelpBlock, Col, Row, Clearfix } from 'react-bootstrap';
import { Link } from 'react-router';
import CollapsiblePanel from './collapsible-panel';
import TournamentListItem from '../tournament/tournament-list-item';

export default class HotList extends Component {

  renderSubList(temp) {
    if (temp){
      return temp.map(
        (tournament) => {
          return (
            <Col xs={6} md={3} key={tournament._id}>
              <TournamentListItem tournament={tournament} />
            </Col>
        );
        }
      );
    }
  }

  render() {
    const HOT_TOURNAMENTS = this.props.hotTournaments;
    const FIRST_HALF = HOT_TOURNAMENTS.slice(0, 4);
    const SECOND_HALF = HOT_TOURNAMENTS.slice(4, 8);
    return (
      <div>
        <Grid>
          <h1 className="text-center underlined-headings">
            热门比赛推荐
          </h1>
        </Grid>
        <Grid>
          <Row>

            <CollapsiblePanel
              firsthalf={this.renderSubList(FIRST_HALF)}
              secondhalf={this.renderSubList(SECOND_HALF)}/>
          </Row>
        </Grid>
      </div>
    );
  }
}

HotList.propTypes = {
  hotTournaments: PropTypes.object.isRequired
};
