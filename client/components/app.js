import React, { Component } from 'react';
import Header from '../containers/header';
import Footer from './footer';
require('../style/main.scss');

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
		);
  }
}

App.propTypes = {
  children: React.PropTypes.node.isRequired,
};
