import React, { Component } from 'react';

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: props.defaultTab
    };
    this.switchTab = this.switchTab.bind(this);
  }

  componentWillMount() {
    this.setState({ totalTabs: this.getTotalTabs(this.props.children)});
  }

  getTotalTabs(children) {
    let totalTabs = 0;
    children.forEach(child => {
      if (child.type.name === 'TabLink') {
        totalTabs++;
      }
    });
    return totalTabs;
  }

  bindSwitchTab() {
    let bindedTabLinks = new Array();
    this.props.children.forEach(child => {
      if (child.type.name === 'TabLink') {
        bindedTabLinks.push(React.cloneElement(child, { switchTab: this.switchTab, activeKey: this.state.activeKey }));
      }
    });
    return bindedTabLinks;
  }

  switchTab(eventKey) {
    this.setState({ activeKey: eventKey });
  }

  renderContent() {
    return this.props.children.find(child => {
      if(child.type.name === 'TabLink'){
        return false;
      } else {
        return child.props.eventKey === this.state.activeKey;
      }
    });
  }

  render() {
    const bindedTabLinks = this.bindSwitchTab();
    const content = this.renderContent();
    return (<div className={this.props.className}>
              <div className="tab-links-wrapper">
                {bindedTabLinks}
              </div>
              {content}
            </div>);
  }
}
