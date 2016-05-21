import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Col from 'react-bootstrap/lib/Col';
import { selectTab, toggleTab } from '../../actions/createTM-actions';

class TabSettingLOL extends Component {
  onClickNext(tab) {
    this.props.selectTab(tab);
  }

  onChange() {
    // todo: on every input change,
    // we refresh the value stored in redux
    // and validate information:

    //this.validate();
  }

  validate() {
    // todo: validate every input
    // if validation passed
    // enable the next tab:

    // this.props.toggleTab(3, false);

    // if validation not passed
    // disable the next tab:

    //this.props.toggleTab(3, true);
  }

  render() {
    return (
      <div>
        <Col sm={8}>
          <h3>Tournament Settings</h3>
          <h4>Game: League of Legend</h4>
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
        <button
          onClick={() => this.onClickNext(3)}
        >
        next</button>
      </div>);
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectTab, toggleTab }, dispatch);
}

export default connect(null, mapDispatchToProps)(TabSettingLOL);
