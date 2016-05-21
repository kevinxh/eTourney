import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import { selectGame, selectTab } from '../../actions/createTM-actions';
import { LEAGUEOFLEGEND, HEARTHSTONE, UNSELECTED } from '../../constants/games';

class TabSelectGame extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    const game = document.getElementById('selectGame').value;
    this.props.selectGame(game);
  }

  onClickNext(tab) {
    this.props.selectTab(tab);
  }

  render() {
    return (<div>
      <Col sm={6}>
        <h>Create your Tournament</h> <br />
        <p>Instruction</p>
      </Col>
      <Col sm={6}>
        <FormGroup controlId="selectGame">
          <ControlLabel>Select</ControlLabel>
          <FormControl onChange={this.onChange} componentClass="select" placeholder="select">
            <option value="Please Select" selected disabled>Please Selected--</option>
            <option value={LEAGUEOFLEGEND}>League of Legend</option>
            <option value={HEARTHSTONE}>HearthStone</option>
          </FormControl>
        </FormGroup>
      </Col>
      <button
        onClick={() => this.onClickNext(2)}
      >
      next</button>
    </div>);
  }
}

// Please state props types for every component props.
// example:
// Delete this comment if you see this. :)
TabSelectGame.propTypes = {
  SelectedGame: React.PropTypes.oneOf([UNSELECTED, LEAGUEOFLEGEND, HEARTHSTONE]).isRequired,
  selectGame: React.PropTypes.func.isRequired,
  selectTab: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    SelectedGame: state.CreateTM.TournamentInfo.game,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectGame, selectTab }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TabSelectGame);
