import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HotDisplay from '../components/hot-tournament/hot-display';
import HotList from '../components/hot-tournament/hot-list';
import { hotSelect } from '../actions/hot-actions';

class HotTournament extends Component {
  render() {
    return (
      <div>
        <HotDisplay tournament={this.props.hotDisplay} />
        <HotList
          hotTournaments={this.props.hotTournaments}
          selectTournamentt={this.props.hotSelect}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    hotDisplay: state.Hot.selectedHot,
    hotTournaments: state.Hot.hotTournaments,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ hotSelect: hotSelect }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HotTournament);
