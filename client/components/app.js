import React, { Component } from 'react';
import Header from '../containers/header';

require('../style/main.scss');

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />

        {this.props.children}


      </div>
		);
  }
}
