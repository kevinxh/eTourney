import React, { Component } from 'react';
require('../style/_footer.scss');

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-12">
              <img src="http://placehold.it/150x150?text=logo" />
            </div>
            <div className="col-md-2 col-xs-6">
              <h4>小标题</h4>
              <ul className="footer-list">
                <li>list item1</li>
                <li>list item1</li>
              </ul>
            </div>
            <div className="col-md-2 col-xs-6">
              <h4>小标题</h4>
              <ul className="footer-list">
                <li>list item1</li>
                <li>list item1</li>
              </ul>
            </div>
            <div className="col-md-2 col-xs-6">
              <h4>小标题</h4>
              <ul className="footer-list">
                <li>list item1</li>
                <li>list item1</li>
              </ul>
            </div>
            <div className="col-md-2 col-xs-6">
              <h4>小标题</h4>
              <ul className="footer-list">
                <li>list item1</li>
                <li>list item1</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="copyright">
              <p className="text-center">copyright</p>
            </div>
          </div>
        </div>
      </footer>
		);
  }
}
