import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import _ from 'underscore'

import SearchBox from '../components/misc/search-box'
import GameListItem from '../components/game-list/game-list-item'
import { fetchGames, fetchTopGames } from '../actions/games-actions'

class CreateTournament extends Component {
  constructor(props) {
    super(props)
    this.handleSearchChange = this.handleSearchChange.bind(this)
    // The following creates a 200ms debounced fetchGames func
    this.debouncedFetchGames = _.debounce(this.props.fetchGames, 200)
  }

  componentWillMount() {
    this.debouncedFetchGames()
  }

  handleSearchChange(event) {
    const searchKey = event.target.value
    this.debouncedFetchGames(searchKey)
  }

  renderGames() {
    if (!this.props.games) {
      return <div></div>
    }
    return this.props.games.map((game) => (
      // TODO: Provide the proper direction to
      // next step of the process
      <Col key={game.name} xs={6} md={4}>
        <GameListItem game={game} />
      </Col>
    ))
  }
  render() {
    return (
      <Grid fluid>
        {/* <h2 className="text-center underlined-headings">Create Your Tournament</h2> */}
        <SearchBox inputHandler={this.handleSearchChange} placeholder="Find Game..." />
        <Row>
          {this.renderGames()}
        </Row>
      </Grid>


    )
  }
}

CreateTournament.propTypes = {
  games: PropTypes.array.isRequired,
  fetchGames: PropTypes.func,
}

function mapStateToProps(state) {
  return {
    games: state.Games.games,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchGames }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTournament)
