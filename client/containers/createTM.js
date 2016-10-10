import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'
import { Router, Route, IndexRoute } from 'react-router'
import { Grid, Row, Col } from 'react-bootstrap'

import SearchGame from './create-TM-search'
import Tabs from '../components/tabs/tabs.js'
import TabLink from '../components/tabs/tab-link.js'
import TabContent from '../components/tabs/tab-content.js'

class CreateTournament extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    children: React.PropTypes.node.isRequired,
  }


  render() {
    return (
      <section id="create-tournament">
        <Grid>
          <div className="heading">
            <h1 className="text-center underlined-headings">
              创建你的比赛
            </h1>
          </div>
          <Tabs defaultTab="1" className="tabs-center">
            <TabLink title="1. 选择游戏" className="tab-link" />
            <TabLink title="2. 创建比赛细则" className="tab-link disabled" />
            <TabLink title="3. 确认比赛信息" className="tab-link disabled" />
            <TabContent className="tab-content">
              {this.props.children}
            </TabContent>
          </Tabs>
        </Grid>
      </section>


    )
  }
}
function mapStateToProps(state){
  return {
  }
}
export default connect(mapStateToProps,null)(CreateTournament)
