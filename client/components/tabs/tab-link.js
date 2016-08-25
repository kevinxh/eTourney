import React, { Component } from 'react';

export default class TabLink extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    //console.log(this.props.eventKey);
    this.props.switchTab(this.props.eventKey);
  }

  render() {
    let { title, eventKey, activeKey } = this.props;
    let active = '';
    if (eventKey === activeKey){
      active = 'active';
    }
    let wrapper = `link-wrapper ${active}`;
    let classes = `${this.props.className} ${active}`;
    return (
      <div className={wrapper}>
        <a className={classes} onClick={this.onClick} href="#">{title}</a>
      </div>
    );
  }
}
