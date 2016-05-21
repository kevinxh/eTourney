import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import TabSelectGame from './tab-select-game';
import TabSettingLOL from './tab-setting-LOL';
import TabSettingHS from './tab-setting-HS';
import { selectTabState } from '../../actions/createTM-actions';
import { LEAGUEOFLEGEND, HEARTHSTONE } from '../../constants/games';


class CreateTMtabs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 1,
      tabState: {
        tab1: true,
        tab2: true,
        tab3: true,
      },

    };

    this.onSelect = this.onSelect.bind(this);
  }


  onSelect(event) {
    this.props.selectTabState(event);
    // todo : error message feedback
  }


  RenderSelect() {
    let TabSetting = '';
    if (!this.props.Selectedgame) {
      return TabSetting;
    }
  else if(this.props.Selectedgame.game==LEAGUEOFLEGEND){
    TabSetting = <TabSettingLOL />;
  }
  else if(this.props.Selectedgame.game==HEARTHSTONE){
    TabSetting = <TabSettingHS />;
  }
    return TabSetting;
  }


  render() {
    return (<div>
      <Tabs
        defaultActiveKey={1}
        activeKey={this.props.Activatedtab.state}
        onSelect={this.onSelect}
        id="createTM"
      >
        <Tab eventKey={1} title="Tab 1"><TabSelectGame /></Tab>
        <Tab eventKey={2} title="Tab 2" disabled={this.props.Activatedtab.disable} >
        {this.RenderSelect()}
        </Tab>
        <Tab eventKey={3} title="Tab 3">
        Tab 3 content
        </Tab>
      </Tabs>
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    Selectedgame: state.CreateTM.SelectedGame,
    Activatedtab: state.CreateTM.SelectedTab,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectTabState }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateTMtabs);
