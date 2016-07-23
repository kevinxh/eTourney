import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-s-12">
              <img className="footer-logo" src="http://placehold.it/150x150?text=logo" />
            </div>
            <div className="col-md-4 col-s-12">
              <ul>
                <h3 className="footer-divider">联系我们</h3>
                <li className="footer-content"> 报告Bug</li>
                <li className="footer-content"> 商业合作</li>
                <li className="footer-content"> 技术支持</li>
              </ul>
            </div>
            <div className="col-md-4 col-s-12">

              <ul>
                <h3 className="footer-divider">关注我们</h3>
                <li className="footer-content"> 微博</li>
                <li className="footer-content"> 微信公众号</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <p className="text-center">copyright</p>
      </div>
      </div>
		);
  }
}
