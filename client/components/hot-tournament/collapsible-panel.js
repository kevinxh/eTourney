import { Button, Panel, Col, Row, Clearfix, Grid } from 'react-bootstrap';
import React, { Component } from 'react';

export default class CollapsiblePanel extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }
  toggleLoading() {
    if (this.state.open === true) {
      return '点击显示更少...'
    }
    else if (this.state.open === false) {
      return '点击显示更多...'
    }
  }
  render() {
    return (
      <div className="collapsible-panel">
        <Grid>
          <Row>
            <Panel className="collapsible-panel">
              {this.props.firsthalf}
            </Panel>
            <Panel className="collapsible-panel" collapsible expanded={this.state.open}>
          {this.props.secondhalf}
            </Panel>
            <div className="text-center game-list-item" onClick={ ()=> this.setState({ open: !this.state.open })}>
                {this.toggleLoading()}
            </div>
          </Row>
        </Grid>
      </div>
    );
  }
}
