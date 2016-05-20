import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Button from 'react-bootstrap/lib/Button';

export default class HotList extends Component {

  renderSubList() {
    if (this.props.hotTournaments){
      return this.props.hotTournaments.map(
        (tournament) => {
          return (
            <Col xs={6} md={3} key={tournament}>
              <Thumbnail  >
                <h3>{tournament}</h3>
                <p>{tournament}</p>
                <p>
                  <Button onClick ={()=>this.props.selectTournamentt(tournament)} bsStyle="primary">Button</Button>&nbsp;
                </p>
              </Thumbnail>
            </Col>
          );
        }
      );
    }
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            {this.renderSubList()}
          </Row>
        </Grid>
      </div>
    );
  }
}
