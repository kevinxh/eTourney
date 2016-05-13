import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

import GameListItem from '../components/game-list/game-list-item';



class GameList extends Component {

  renderGames() {
    return this.props.games.map((game) => (
      <Col key={game.name} xs={6} md={3}>
        <GameListItem game={game} />
      </Col>
    ));
  }
  render() {
    return (
      <Grid>
        <h2 className="text-center">Choose your game</h2>
        <Row className="show-grid">
          {this.renderGames()}
        </Row>
      </Grid>
    );
  }
}

GameList.propTypes = {
  games: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    games: state.Games
  };
}

export default connect(mapStateToProps, null)(GameList);
