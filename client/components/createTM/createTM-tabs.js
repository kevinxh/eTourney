import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from '../tabs/tabs.js';
import TabLink from '../tabs/tab-link.js';
import TabContent from '../tabs/tab-content.js';
// import CreateTournament from "../create-tournament";
// import Tabs from 'react-bootstrap/lib/Tabs';
// import Tab from 'react-bootstrap/lib/Tab';
// import TabSelectGame from './tab-select-game';
// import TabSettingLOL from './tab-setting-LOL';
// import TabSettingHS from './tab-setting-HS';
// import { LEAGUEOFLEGEND, HEARTHSTONE } from '../../constants/games';

export default class CreateTMtabs extends Component {
  render() {
    return (
      <div>
        <Tabs defaultTab={1} className="tabs-center">
          <TabLink title="1. 选择游戏" eventKey={1} className="tab-link-lg" />
          <TabLink title="2. 创建比赛细则" eventKey={2} className="tab-link-lg" />
          <TabLink title="3. 确认比赛信息" eventKey={3} className="tab-link-lg" />
          <TabContent eventKey={1} className="tab-content content-custom-css">
            <div>
             1. 选择游戏
            </div>
          </TabContent>
          <TabContent eventKey={2} className="tab-content content-custom-css">
            <div>
             2. 创建比赛细则
            </div>
          </TabContent>
          <TabContent eventKey={3} className="tab-content content-custom-css">
            <div>
             3. 确认比赛信息
            </div>
          </TabContent>
        </Tabs>
      </div>
    );
  }
}



//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedTab: 1,
//       tabState: {
//         tab1: true,
//         tab2: false,
//         tab3: false,
//       },
//
//     };
//     this.Activekey = this.Activekey.bind(this);
//     this.onSelect = this.onSelect.bind(this);
//   }
//
//   Activekey(key) {
//     this.setState({ selectedTab: key });
//   }
//
//   handleTabState(tab, active) {
//     if (!this.props.Selectedgame) {}
//     else {
//       this.setState({
//         selectedTab: active,
//         tabState: {
//           [tab]: true,
//         },
//       }
//     );
//     }
//   }
//
//   onSelect(event) {
//       if (this.state.tabState[`tab${event}`]) {
//         this.setState({ selectedTab: event });
//       }
//     // todo : error message feedback
//   }
//
//   RenderSelect() {
//     let TabSetting = '';
//     if (!this.props.Selectedgame) {
//       return TabSetting;
//     }
//   else if(this.props.Selectedgame.game==LEAGUEOFLEGEND){
//     TabSetting = <TabSettingLOL />;
//   }
//   else if(this.props.Selectedgame.game==HEARTHSTONE){
//     TabSetting = <TabSettingHS />;
//   }
//     return TabSetting;
//   }
//
//
//   render() {
//     return (<div>
//       <Tabs
//         defaultActiveKey={1}
//         activeKey={this.state.selectedTab}
//         onSelect={this.onSelect}
//         id="createTM"
//       >
//         <Tab eventKey={1} title="Tab 1"><TabSelectGame /></Tab>
//         <Tab eventKey={2} title="Tab 2" disable={this.state.tabState.tab2}>
//         {this.RenderSelect()}
//         </Tab>
//         <Tab eventKey={3} title="Tab 3" disable={this.state.tabState.tab3}>
//         Tab 3 content
//         </Tab>
//       </Tabs>
//       <button
//         onClick={()=> this.handleTabState(`tab${this.state.selectedTab+1}`,this.state.selectedTab+1)}
//       >
//       next</button>
//     </div>);
//   }
// }
//
// function mapStateToProps(state) {
//   return {
//
//     Selectedgame: state.CreateTM
//   };
// }
//
// export default connect(mapStateToProps)(CreateTMtabs);
