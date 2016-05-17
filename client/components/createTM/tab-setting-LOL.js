import React, { Component } from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Col from 'react-bootstrap/lib/Col';

export default class TabSettingLOL extends Component {
  render() {
    return (
      <div>
        <Col sm={8}>
          <FormGroup controlID="formControlsText">
            <ControlLabel>Organization</ControlLabel>
            <FormControl type="text" placeholder="PLease Enter Your Organization Name" />
          </FormGroup>
          <FormGroup controlID="formControlsText">
            <ControlLabel>Tournament Name</ControlLabel>
            <FormControl type="text" placeholder="PLease Enter Your Tournament Name" />
          </FormGroup>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Marker</ControlLabel>
            <FormControl onChange={this.onChange} componentClass="select" placeholder="select">
              <option value="League of Legend">League of Legend</option>
            </FormControl>
          </FormGroup>

        </Col>
        <Col sm={4}>
          <h>Instruction</h>
        </Col>
      </div>);
  }
}
