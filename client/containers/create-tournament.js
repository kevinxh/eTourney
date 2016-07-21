import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import SearchBox from '../components/misc/search-box';

class CreateTournament extends Component {
  render() {
    return (
      <Grid>
        <h2 className="text-center underlined-headings">Create Your Tournament</h2>
        <SearchBox placeholder="Find Game..."/>
      </Grid>


    )
  }
}

export default connect(null, null)(CreateTournament);
