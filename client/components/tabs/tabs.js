import React, { Component } from 'react';
import { Link } from 'react-router';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';

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


  changeButtons(){
  if (this.state.activeKey==1){
    return (
      <Grid>
        <Row>
          <Col xs={12} md={3}>
            <Link to="/">
              <button className="btn btn-link btn-large"><span>&#10096;</span>返回首页</button>
            </Link>
          </Col>
          <Col xs={12} md={3} mdOffset={6}>
            <button className="btn btn-link btn-large" onClick={this.nextTab} >
              创建比赛细则<span>&#10097;</span>
            </button>
          </Col>
        </Row>
      </Grid>);
  }

    else if (this.state.activeKey==2) {
    return(
      <Grid>
        <Row>
          <Col xs={12} md={3}>
            <button className="btn btn-link btn-large" onClick={this.previousTab}>
              <span>&#10096;</span>返回选择游戏
            </button>
          </Col>
          <Col xs={12} md={3} mdOffset={6}>
            <button className="btn btn-link btn-large" onClick={this.nextTab} >
              确认比赛信息<span>&#10097;</span>
            </button>
          </Col>
        </Row>
      </Grid>
  );
  }

  else
  {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={3}>
            <button className="btn btn-link btn-large" onClick={this.previousTab}>
              <span>&#10096;</span>返回比赛细则
            </button>
          </Col>
          <Col xs={12} md={3} mdOffset={6}>
            <button className="btn btn-link btn-large">创建比赛<span>&#10097;</span></button>
          </Col>
        </Row>
      </Grid>
      );
  }
  }
  renderContent() {
    return this.props.children.find(child => {
      if (child.type.name === 'TabLink'){
        return false;
      } else {
        return child.props.eventKey === this.state.activeKey;
      }
    });
  }
  render() {
    const bindedTabLinks = this.bindSwitchTab();
    const content = this.renderContent();

    return (
      <ul className={this.props.className}>
              <div className="tab-links-wrapper">
                {bindedTabLinks}
              {content}
              {this.changeButtons()}
              </div>
            </ul>);
  }
}
