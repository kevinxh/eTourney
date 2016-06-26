import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchHotTournament } from '../actions/hot-actions';
import TournamentListItem from '../components/tournament/tournament-list-item';

class HotTournament extends Component {
  componentWillMount() {
    this.props.fetchHotTournament();
  }

  render() {
    const tournaments = this.props.hotTournaments;
    return (
      <section id="hot-tournaments">
        <div className="container">
          <div className="heading">
            <h1 className="text-center underlined-headings">
              热门比赛推荐
            </h1>
          </div>
          <div className="row">
            {tournaments.slice(0, 3).map(tournament => {
              return (
                <div key={tournament.tournamentName} className="col-xs-12 col-sm-6 col-md-4">
                  <TournamentListItem
                    tournament={tournament}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

HotTournament.propTypes = {
  fetchHotTournament: React.PropTypes.func.isRequired,
  hotTournaments: React.PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    hotTournaments: state.Tournaments.hotTournaments,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchHotTournament }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HotTournament);
