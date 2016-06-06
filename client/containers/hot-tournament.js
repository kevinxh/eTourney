import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import HotDisplay from '../components/hot-tournament/hot-display';
import HotList from '../components/hot-tournament/hot-list';
import { hotSelect, fetchHotTournament } from '../actions/hot-actions';
import { Grid, Row, Col } from 'react-bootstrap';


class HotTournament extends Component {
  componentWillMount() {
    console.log(this.props.hotTournaments);
    this.props.fetchHotTournament();
    // console.log(this.props.data);
  };

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
    hotTournaments: state.Hot.hotTournaments,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchHotTournament: fetchHotTournament }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HotTournament);
