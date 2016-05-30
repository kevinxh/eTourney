import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HotDisplay from '../components/hot-tournament/hot-display';
import HotList from '../components/hot-tournament/hot-list';
import { hotSelect } from '../actions/hot-actions';
import { Grid, Row, Col } from 'react-bootstrap';
import Collapsible from 'react-collapsible';

class HotTournament extends Component {
  render() {
    return (
      <Grid>

        <Row>
        <HotList
          hotTournaments={this.props.hotTournaments}
        />
        </Row>

      </Grid>
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
