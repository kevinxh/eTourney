import { Button, Panel, Col, Row, Clearfix, Grid } from 'react-bootstrap';
import React, { Component } from 'react';

export default class COLLAPSIBLE_PANEL extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }
  CHANGE_LOAD() {
    if (this.state.open === true) {
      return 'Click To Load Less...'
    }
    else if (this.state.open === false) {
      return 'Click To Load More...'
    }
  }
  render() {
    return (
      <div className="collapsible-panel">
        <Grid>
          <Row>
            <Panel className="collapsible-panel">
              {this.props.tournament1}
            </Panel>
            <Panel className="collapsible-panel" collapsible expanded={this.state.open}>
          {this.props.tournament}
            </Panel>
            <div className="text-center game-list-item" onClick={ ()=> this.setState({ open: !this.state.open })}>
                {this.CHANGE_LOAD()}
            </div>
          </Row>
        </Grid>
      </div>
    );
  }
}
