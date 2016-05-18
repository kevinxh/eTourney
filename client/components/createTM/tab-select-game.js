import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import { selectGame } from '../../actions/createTM-actions';
import { LEAGUEOFLEGEND } from '../../constants/games';
import { HEARTHSTONE } from '../../constants/games';

class TabSelectGame extends Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    const game=document.getElementById('formControlsSelect').value;
    this.props.selectGame(game);
  }
  render() {
    return (<div>
      <Col sm={6}>
        <h>Create your Tournament</h> <br />
        <p>Instruction</p>
      </Col>
      <Col sm={6}>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select</ControlLabel>
          <FormControl onChange={this.onChange} componentClass="select" placeholder="select">
            <option value="Please Select" selected disabled>Please Selected--</option>
            <option value={LEAGUEOFLEGEND}>League of Legend</option>
            <option value={HEARTHSTONE}>HearthStone</option>
          </FormControl>
        </FormGroup>
      </Col>
    
      next</button>
    </div>);
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectGame }, dispatch);
}

export default connect(null, mapDispatchToProps)(TabSelectGame);
