import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import { Grid, Row, Col } from 'react-bootstrap'

import Tabs from '../components/tabs/tabs'
import TabLink from '../components/tabs/tab-link.js'
import TabContent from '../components/tabs/tab-content.js'

import { selectGame, fetchGames, fetchTopGames } from '../actions/games-actions'

class CreateTournament extends Component {
  constructor(props) {
    super(props)
  }


  static propTypes = {
    children: React.PropTypes.node.isRequired,
    selectGame: React.PropTypes.function,
    fetchGames: React.PropTypes.function,
    fetchTopGames: React.PropTypes.function,
    games: React.PropTypes.array
  }

  componentWillReceiveProps(props){
    console.log(props);
  }

  render() {
    const { games, selectedGame, selectGame, fetchGames, fetchTopGames } = this.props
    const childrenWithPropsFromStore = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        // states
        games,
        selectedGame,
        // dispatch
        selectGame,
        fetchGames,
        fetchTopGames,
      })
    )
    const links = [
      '/create',
      (selectedGame ? `/create/${selectedGame._id}` : '/create/#'),
      '/create/confirm'
    ]
    return (
      <section id="create-tournament">
        <Grid>
          <div className="heading">
            <h1 className="text-center underlined-headings">
              创建你的比赛
            </h1>
          </div>
          <Tabs defaultTab="1" className="tabs-center">
            <TabLink
              title="1. 选择游戏"
              className="tab-link"
              link={links[0]}
            />
            <TabLink
              title="2. 创建比赛细则"
              className="tab-link disabled"
              link={links[1]}
            />
            <TabLink
              title="3. 确认比赛信息"
              className="tab-link disabled"
              link={links[2]}
            />
            <TabContent className="tab-content">
              {childrenWithPropsFromStore}
            </TabContent>
          </Tabs>
        </Grid>
      </section>


    )
  }
}
function mapStateToProps(state) {
  return {
    games: state.Games.games,
    selectedGame: state.Games.selectedGame
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectGame,
    fetchGames,
    fetchTopGames
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateTournament)
