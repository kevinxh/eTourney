import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import { selectGame } from '../../actions/createTM-actions';

class TabChoose extends Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange() {
  console.log(selectGame);
  const game=document.getElementById('formControlsSelect').value;
  this.props.selectGame(game);
  }
  render() {
    return (<div>
      <Col sm={6}>
        left
      </Col>
      <Col sm={6}>
      <FormGroup controlId="formControlsSelect">
      <ControlLabel>Select</ControlLabel>
      <FormControl onChange={this.onChange} componentClass="select" placeholder="select">
        <option value="select">select</option>
        <option value="HearthStone">HearthStone</option>
      </FormControl>
    </FormGroup>
      </Col>
    </div>);
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({ selectGame }, dispatch);
}

export default connect(null, mapDispatchToProps)(TabChoose);
