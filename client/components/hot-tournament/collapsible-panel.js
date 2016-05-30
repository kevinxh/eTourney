import { Button, Panel, Col, Row, Clearfix, Grid } from 'react-bootstrap';
import React, { Component } from 'react';

export default class Collapsible_panel extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }
  change_load(){
    if (load=="load more"){
      var load= "load more";
    }else{
      var load ="load less";
    }

  }
  render() {
    var load = "load more"
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
            <a class="center-block" onClick={ ()=> this.setState({ open: !this.state.open })}>
                {load}
            </a>
          </Row>
        </Grid>
      </div>
    );
  }
}
