import React, { Component } from 'react';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';

export default class CreateTMtabs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 1,
    };
    this.Activekey = this.Activekey.bind(this);
  }

  Activekey(key) {
    console.log ("Activekeyy");
    this.setState({selectedTab:key});
  }

  render() {
    return (<div>
      <Tabs defaultActiveKey={1}
        activeKey={this.state.selectedTab}
        id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
        <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
        <Tab eventKey={3} title="Tab 3">Tab 3 content</Tab>
      </Tabs>
      <button onClick={()=> this.Activekey(1)}>1</button>
      <button onClick={()=> this.Activekey(2)}>2</button>
      <button onClick={()=> this.Activekey(3)}>3</button>
      </div>);
  }

}
