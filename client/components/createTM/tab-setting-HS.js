import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Col from 'react-bootstrap/lib/Col';
import { selectTab } from '../../actions/createTM-actions';

class TabSettingHS extends Component {
  onClickNext(tab) {
    this.props.selectTab(tab);
  }

  // same todos as TabSettingLOL!!

  render() {
    return (
      <div>
        <Col sm={8}>
          <h3>Tournament Settings</h3>
          <h4>Game: Hearth Stone</h4>
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
              <option value="HearthStone">HearthStone</option>
            </FormControl>
          </FormGroup>

        </Col>
        <Col sm={4}>
          <h>Instruction</h>
        </Col>
        <button
          onClick={() => this.onClickNext(3)}
        >
        next</button>
      </div>);
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectTab }, dispatch);
}

export default connect(null, mapDispatchToProps)(TabSettingHS);
