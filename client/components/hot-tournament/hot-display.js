import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';

export default class HotDisplay extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12} md={9}>
              <Thumbnail>
                <h3>{this.props.tournament}</h3>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
