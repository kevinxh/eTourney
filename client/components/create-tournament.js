import React, { Component } from 'react';
import CreateTMtabs from './createTM/createTM-tabs';

export default class CreateTournament extends Component {
  render() {
    return (
      <section id="create-tournament">
        <div className="heading">
          <h1 className="text-center underlined-headings">
            创建你的比赛
          </h1>
        </div>
        <CreateTMtabs />
      </section>
		);
  }
}
