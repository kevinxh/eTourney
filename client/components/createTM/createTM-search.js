import React, { Component, PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { browserHistory } from 'react-router'
import _ from 'underscore'

import SearchBox from '../misc/search-box'
import GameListItem from '../game-list/game-list-item'

export default class CreateTournament extends Component {
  static propTypes = {
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func,
    selectGame: PropTypes.func,
  }
  constructor(props) {
    super(props)
    this.handleSearchChange = this.handleSearchChange.bind(this)
    // The following creates a 200ms debounced fetchGames func
    this.debouncedFetchGames = _.debounce(this.props.fetchGames, 200)
  }
  componentWillMount() {
    this.debouncedFetchGames()
  }

  handleSearchChange(key) {
    this.debouncedFetchGames(key)
  }

  renderGames() {
    if (!this.props.games) {
      return <div></div>
    }
    return this.props.games.map((game) => (
      // TODO: Put Select Game here

      <Col key={game.name} xs={6} md={4}>
        <GameListItem
          game={game}
          onClick={() => {
            browserHistory.push(`/create/${game._id}`)
            this.props.selectGame(game._id)
          }}
        />
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
