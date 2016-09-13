import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: props.defaultTab
    };
    this.switchTab = this.switchTab.bind(this);
    this.nextTab = this.nextTab.bind(this);
    this.previousTab = this.previousTab.bind(this);
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

  previousTab() {
    this.setState({ activeKey: this.state.activeKey-1});
  }
  nextTab() {
    this.setState({ activeKey: this.state.activeKey+1});
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

  changeButtons(){
  if (this.state.activeKey==1){
    return(
    <div>
    <Link to="/">
    <button className="btn btn-large">返回首页</button>
    </Link>
    <button className="btn btn-large" onClick={this.nextTab} > 创建比赛细则 </button>
    </div>);
  }

  else if (this.state.activeKey==2){
    return(
    <div>
    <button className="btn btn-large" onClick={this.previousTab}>返回选择游戏</button>
    <button className="btn btn-large" onClick={this.nextTab} > 确认比赛信息 </button>
    </div>);
  }

  else
  {
    return(
    <div>
    <button className="btn btn-large" onClick={this.previousTab}>返回比赛细则</button>
    <button className="btn btn-large"> 创建比赛 </button>
    </div>);
  }
}

  render() {
    const bindedTabLinks = this.bindSwitchTab();
    const content = this.renderContent();

    return (
      <ul className={this.props.className}>
              <div className="tab-links-wrapper">
                {bindedTabLinks}
              </div>
              {content}
              {this.changeButtons()}
            </ul>);
  }
}
