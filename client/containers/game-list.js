import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { fetchGames } from '../actions/games-actions';

import GameListItem from '../components/game-list/game-list-item';

class GameList extends Component {

  componentWillMount() {
    this.props.fetchGames();
  };
  renderGames() {
    if (!this.props.games) {
      return <div></div>
    }
    return this.props.games.map((game) => (
      <Col key={game.name} xs={6} md={4}>
        <GameListItem game={game} />
      </Col>
    ));
  }
  render() {
    return (
      <Grid>
        <h2 className="text-center">Choose your game</h2>
        <hr />
        <div className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        <Row className="show-grid">
          {this.renderGames()}
        </Row>
      </Grid>
    );
  }
}

GameList.propTypes = {
  games: PropTypes.array.isRequired,
  fetchGames: PropTypes.func
};

function mapStateToProps(state) {
  return {
    games: state.Games.games
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchGames }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameList);
