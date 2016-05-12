import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class GameList extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Game List</h1>
      </div>
    );
  }
}

export default connect(null, null)(GameList);
