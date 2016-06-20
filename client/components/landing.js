import React, { Component } from 'react';
require('../style/_landing.scss');

export default class Landing extends Component {
  render() {
    return (
      <section className="hero">
        <div className="intro">
          <h1 className="topic">水友们，战起来！</h1>
          <h4 className="info">专为国内游戏玩家打造的一体化比赛管理平台</h4>
          <button className="btn btn-large btn-border">寻找比赛</button>
          <button className="btn btn-large btn-border-primary">创建属于你的比赛</button>
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
