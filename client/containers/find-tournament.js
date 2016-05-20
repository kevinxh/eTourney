import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGame } from '../actions/games-actions';

class FindTournament extends Component {
  componentDidMount() {
    this.props.fetchGame(this.props.params.game);
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Select a Tournament</h2>
        <span>{this.props.params.game}</span>
      </div>
		);
  }
}

FindTournament.propTypes = {
  game: React.PropTypes.object,
  params: React.PropTypes.object.isRequired,
  fetchGame: React.PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchGame }, dispatch);
}
function mapStateToProps(state) {
  return { game: state.Games.selectedGame };
}

export default connect(mapStateToProps, mapDispatchToProps)(FindTournament);
