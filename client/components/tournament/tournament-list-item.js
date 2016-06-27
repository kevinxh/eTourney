import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { Image } from 'react-bootstrap';

class TournamentListItem extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.push(`/${this.props.tournament.tournamentName}`);
  }

  image() {
    const img = {
      backgroundImage: 'url(' + 'http://placehold.it/300x150' + ')',
    };
    return img;
  }

  render() {
    let {
      gid,
      game,
      creatorEmail, // should be user nick name
      tournamentName,
      time,
      type
    } = this.props.tournament;
    return (
      <div className="tournament-list-item" onClick={this.onClick}>
        <div className="tournament-image" style={this.image()} />
        <div className="content-area">
          <div className="content-title">
            <div className="title">{tournamentName}</div>
            <div className="creator">{creatorEmail}</div>
          </div>
          <hr />
          <table className="table">
            <tbody>
              <tr>
                <td>游戏</td>
                <td>{game}</td>
              </tr>
              <tr>
                <td>时间</td>
                <td>{time}</td>
              </tr>
              <tr>
                <td>比赛类型</td>
                <td>{type}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

TournamentListItem.propTypes = {
  tournament: PropTypes.object.isRequired,
  push: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ push }, dispatch);
}

export default connect(null, mapDispatchToProps)(TournamentListItem);
