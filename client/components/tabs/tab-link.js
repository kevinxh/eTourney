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
    let { title } = this.props;
    return (
      <a className={this.props.className} onClick={this.onClick} href="#">{title}</a>
    );
  }
}
