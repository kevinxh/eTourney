import React, { Component } from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Col from 'react-bootstrap/lib/Col';

export default class TabSetting extends Component {
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
            <ControlLabel>Select</ControlLabel>
            <FormControl onChange={this.onChange} componentClass="select" placeholder="select">
              <option value="Please Select" selected disabled>Please Enter Your Tournament Name--</option>
              <option value="League of Legend">League of Legend</option>
              <option value="HearthStone">HearthStone</option>
            </FormControl>
          </FormGroup>
        </Col>
        <Col sm={4}>
          <h>Instruction</h>
        </Col>
      </div>);
  }
}
