import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tabs from '../tabs/tabs.js'
import TabLink from '../tabs/tab-link.js'
import TabContent from '../tabs/tab-content.js'
import TabSettingLOL from './tab-setting-LOL'
import TMSearch from '../../containers/create-TM-search'
import TMconfirmation from './createTM-confirmation.js'

// import Tabs from 'react-bootstrap/lib/Tabs';
// import Tab from 'react-bootstrap/lib/Tab';
// import TabSelectGame from './tab-select-game';
// import TabSettingHS from './tab-setting-HS';
// import { LEAGUEOFLEGEND, HEARTHSTONE } from '../../constants/games';

export default class CreateTMtabs extends Component {
  render() {
    return (
      <div>
        <Tabs defaultTab="1" className="tabs-center">
          <TabLink title="1. 选择游戏" eventKey="1" className="tab-link" />
          <TabLink title="2. 创建比赛细则" eventKey="2" className="tab-link" />
          <TabLink title="3. 确认比赛信息" eventKey="3" className="tab-link disabled" />
          <TabContent eventKey="1" className="tab-content">
            <TMSearch />
          </TabContent>
          <TabContent eventKey="2" className="tab-content">
            <TabSettingLOL />
          </TabContent>
          <TabContent eventKey="3" className="tab-content">
            <div>
              3. 确认比赛信息
              <TMconfirmation />
            </div>
          </TabContent>
        </Tabs>
      </div>
    )
  }
}
