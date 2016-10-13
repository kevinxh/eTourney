import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

import Input from 'react-toolbox/lib/input'
import DatePicker from 'react-toolbox/lib/date_picker'
import TimePicker from 'react-toolbox/lib/time_picker'
import Dropdown from 'react-toolbox/lib/dropdown'


import * as OW_SETTINGS from '../../../constants/games/OW'

export default class OverwatchSettings extends Component {
  constructor(props) {
    super(props)
    this.state={
      tournamentName: '',
      nTeams: 0,
      region: 'NA',
      seriesRules: 'BO3',
      tournamentTeamRules: 'SE'
    }
  }

  handleFormChange(field, value){
    this.setState({
      [field]: value
    })
  }

  render() {
    return (
      <div id="ow-form">
        <Row>
          <Col md={12} xs={12} >
            <Input
              type='text'
              label='Tournament name'
              required
              value={this.state.tournamentName}
              onChange={this.handleFormChange.bind(this, 'tournamentName')}
              maxLength={16}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6} xd={12}>
            <DatePicker
              label='Tournament Date'
              onChange={this.handleFormChange.bind(this, 'tournamentDate')}
              value={this.state.tournamentDate}
            />
          </Col>
          <Col md={6} xd={12}>
            <TimePicker
              label='Tournament Time'
              onChange={this.handleFormChange.bind(this, 'tournamentStartTime')}
              value={this.state.tournamentStartTime}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6} xs={12} >
            <Input
              type='number'
              label='Maximum Teams'
              required
              value={this.state.nTeams}
              onChange={this.handleFormChange.bind(this, 'nTeams')}
              maxLength={1}
            />
          </Col>
          <Col md={6} xs={12}>
            <Dropdown
              auto
              label={'Region'}
              onChange={this.handleFormChange.bind(this, 'region')}
              source={OW_SETTINGS.OVERWATCH_REGIONS}
              value={this.state.region}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6} xs={12} >
            <Dropdown
              auto
              label={'Series Rules'}
              onChange={this.handleFormChange.bind(this, 'seriesRules')}
              source={OW_SETTINGS.OVERWATCH_TOURNAMENT_GAMES_PER_SERIES}
              value={this.state.seriesRules}
            />
          </Col>
          <Col md={6} xs={12}>
            <Dropdown
              auto
              label={'Tournament Team Rules'}
              onChange={this.handleFormChange.bind(this, 'tournamentTeamRules')}
              source={OW_SETTINGS.OVERWATCH_TOURNAMENT_TEAM_RULES}
              value={this.state.tournamentTeamRules}
            />
          </Col>
        </Row>
      </div>
    )
  }
}
