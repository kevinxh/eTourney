import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import TabSelectGame from './tab-select-game';
import SimpleForm from './tab-setting-LOL';
import TabSettingHS from './tab-setting-HS';
import { selectTab } from '../../actions/createTM-actions';
import { LEAGUEOFLEGEND, HEARTHSTONE, UNSELECTED } from '../../constants/games';

class CreateTMtabs extends Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(event) {
    this.props.selectTab(event);
    // todo : error message feedback
  }

  RenderSelect() {
    let TabSetting = '';
    if (this.props.SelectedGame === UNSELECTED) {
      return TabSetting;
    } else if (this.props.SelectedGame === LEAGUEOFLEGEND) {
      TabSetting = <SimpleForm />;
    } else if (this.props.SelectedGame === HEARTHSTONE) {
      TabSetting = <TabSettingHS />;
    }
    return TabSetting;
  }

  render() {
    return (<div>
      <Tabs
        defaultActiveKey={1}
        activeKey={this.props.SelectedTab}
        onSelect={this.onSelect}
        id="createTM"
      >
        <Tab eventKey={1} title="Tab 1">
          <TabSelectGame />
        </Tab>
        <Tab eventKey={2} title="Tab 2" disabled={this.props.TabState['2']}>
          <SimpleForm />
        </Tab>
        <Tab eventKey={3} title="Tab 3" disabled={this.props.TabState['3']}>
        Tab 3 content
        </Tab>
      </Tabs>
    </div>);
  }
}

// Please state props types for every component props.
// example:
// Delete this comment if you see this. :)
CreateTMtabs.propTypes = {
  SelectedGame: React.PropTypes.oneOf([UNSELECTED, LEAGUEOFLEGEND, HEARTHSTONE]).isRequired,
  SelectedTab: React.PropTypes.number.isRequired,
  selectTab: React.PropTypes.func.isRequired,
  TabState: React.PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    SelectedGame: state.CreateTM.TournamentInfo.game,
    SelectedTab: state.CreateTM.TabState.SelectedTab,
    TabState: state.CreateTM.TabState.isDisabled,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectTab }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateTMtabs);
