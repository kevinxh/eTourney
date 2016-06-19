import React, { Component } from 'react';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';
require('../style/_landing.scss');

export default class Landing extends Component {
  render() {
    return (
      <section className="hero">
        <div className="intro">
          <h1 className="topic">水友们，战起来！</h1>
          <h4 className="info">专为国内游戏玩家打造的一体化比赛管理平台</h4>
          <ButtonToolbar>
            <Button bsSize="large">寻找比赛</Button>
            <Button bsSize="large" bsStyle="primary">创建属于你的比赛</Button>
          </ButtonToolbar>
        </div>
        <div className="bg-wrapper">
          <video preload="auto" autoPlay loop muted>
            <source src="https://d33jl3tgfli0fm.cloudfront.net/helix/videos/hero-loop-webm.webm" type="video/webm" />
            </video>
        </div>
      </section>
		);
  }
}
