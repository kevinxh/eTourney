import React, { Component } from 'react';

export default class TabContent extends Component {
  render() {
    return <div className={this.props.className}>{this.props.children}</div>;
  }
}
