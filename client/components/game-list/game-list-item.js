import React, { Component, PropTypes } from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router'

class GameListItem extends Component {
  componentWillMount() {
  }
  render() {
    const { game } = this.props
    return (
      <div className="text-center game-list-item">
        <Link to={`/find/${game._id}`}><Image src={`https://s3-us-west-2.amazonaws.com/etourney-media/images/games/${game._id}.jpg`} responsive /></Link>
      </div>
    )
  }
}

GameListItem.propTypes = {
  game: PropTypes.object.isRequired,
}

export default GameListItem
