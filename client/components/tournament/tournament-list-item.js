import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router';

class TournamentListItem extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.push(`/${this.props.tournament._id}`);
  }

  image() {
    let url;
    if (this.props.tournament.uploadedImage === true) {
      url = `url(https://s3-us-west-2.amazonaws.com/etourney-media/images/tournaments/${this.props.tournament._id}.jpg)`;
    } else {
      url = `url(https://s3-us-west-2.amazonaws.com/etourney-media/images/tournaments/default/${this.props.tournament.game.id}.jpg)`;
    }
    const img = {
      backgroundImage: url,
    };
    return img;
  }

  render() {
    let {
      _id,
      game,
      creatorEmail, // should be user nick name
      tournamentName,
      time,
      type
    } = this.props.tournament;
    return (
      <div className="tournament-list-item" onClick={this.onClick}>
        <div className="image-box">
          <div
            className="tournament-image"
            style={this.image()}
          />
        </div>
        <div className="content-area">
          <div className="content-title">
            <div className="title">{tournamentName}</div>
            <div className="creator">
              <Link to="/">{creatorEmail}</Link>
            </div>
          </div>
          <hr />
          <table className="content-detail table">
            <tbody>
              <tr>
                <td>游戏</td>
                <td>{game.name}</td>
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
