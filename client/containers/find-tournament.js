import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid, Row, Col } from 'react-bootstrap'

import { selectGame } from '../actions/games-actions'
import { fetchTournaments } from '../actions/tournaments-actions'
import TournamentListItem from '../components/tournament/tournament-list-item'

class FindTournament extends Component {
  componentDidMount() {
    this.props.selectGame(this.props.params.game)
    this.props.fetchTournaments(this.props.params.game)
  }
  renderTournaments() {
    if (this.props.tournaments.length === 0) {
      return <div></div>
    }
    return this.props.tournaments.map((tournament) => (
      <Col key={tournament._id} xs={6} md={3}>
        <TournamentListItem tournament={tournament} />
      </Col>
    ))
  }
  render() {
    console.log(this.props.tournaments)
    if (!this.props.game) {
      return (<div></div>)
    }
    if (!this.props.tournaments) {
      return (<div></div>)
    }
    return (
      <Grid>
        <h2 className="text-center underlined-headings">{this.props.game.name} Tournaments</h2>
        <Row>
          {this.renderTournaments()}
        </Row>
      </Grid>
    )
  }
}

FindTournament.propTypes = {
  game: React.PropTypes.object,
  tournaments: React.PropTypes.array,
  params: React.PropTypes.object.isRequired,
  selectGame: React.PropTypes.func,
  fetchTournaments: React.PropTypes.func,
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectGame, fetchTournaments }, dispatch)
}
function mapStateToProps(state) {
  return {
    game: state.Games.selectedGame,
    tournaments: state.Tournaments.tournaments,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindTournament)
