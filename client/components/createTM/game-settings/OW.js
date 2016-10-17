import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import _ from 'underscore'

import Input from 'react-toolbox/lib/input'
import DatePicker from 'react-toolbox/lib/date_picker'
import TimePicker from 'react-toolbox/lib/time_picker'
import Dropdown from 'react-toolbox/lib/dropdown'
import Checkbox from 'react-toolbox/lib/checkbox'


import * as OW_SETTINGS from '../../../constants/games/OW'

class BansForm extends Component {
  static propTypes = {
    dictionary: React.PropTypes.object,
    show: React.PropTypes.bool,
    bucket: React.PropTypes.array,
    handler: React.PropTypes.func
  }

  _checkboxOnChange(key, value) {
    this.props.handler(key, value)
  }

  _findKeyInBucket(key){
    console.log(this.props.bucket);
    return this.props.bucket.find((inBucketVal) => inBucketVal === key) || false
  }

  renderBanArea() {
    return _.map(this.props.dictionary, (group, type) => {
      return (
        <Col md={3} xs={6} className="ban-form">
          <h1>{type}</h1>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            {group.map(
              key =>
                <Checkbox
                  checked={this._findKeyInBucket(key)}
                  label={key}
                  onChange={this._checkboxOnChange.bind(this, key)}
                />
            )}
          </div>
        </Col>
        )
    })
  }

  render() {
    const area = this.props.show?
      <div>
        {this.renderBanArea()}
      </div>
      :
      <div />
    return area
  }
}

export default class OverwatchSettings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tournamentName: '',
      nTeams: 0,
      region: 'NA',
      seriesRules: 'BO3',
      tournamentTeamRules: 'SE',
      enableMapBans: false,
      enableHeroBans: false,
      mapBans: [],
      heroBans: []
    }
  }

  handleFormChange(field, value){
    this.setState({
      [field]: value
    })
  }

  banFormChange(formBucket, key, checked){
    if (checked){
      this.setState({
        [formBucket] : [...this.state[formBucket], key ]
      })
    } else {
      this.setState({
        [formBucket] : _.reject(this.state[formBucket], (val) => val === key)
      })
    }
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
              label='Date'
              onChange={this.handleFormChange.bind(this, 'tournamentDate')}
              value={this.state.tournamentDate}
            />
          </Col>
          <Col md={6} xd={12}>
            <TimePicker
              label='Time'
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
        <Row>
          <Col md={2} xs={2}>
            <Checkbox
              checked={this.state.enableMapBans}
              label={"Map Bans?"}
              onChange={this.handleFormChange.bind(this, 'enableMapBans')}
            />
          </Col>
        </Row>
        <Row>
          <BansForm
            dictionary={OW_SETTINGS.OVERWATCH_MAPS}
            show={this.state.enableMapBans}
            bucket={this.state.mapBans}
            handler={this.banFormChange.bind(this,'mapBans')}
          />
        </Row>
        <Row>
          <Col md={2} xs={2}>
            <Checkbox
              checked={this.state.enableHeroBans}
              label={"Hero Bans?"}
              onChange={this.handleFormChange.bind(this, 'enableHeroBans')}
            />
          </Col>
        </Row>
        <Row>
          <BansForm
            dictionary={OW_SETTINGS.OVERWATCH_CHARACTERS}
            show={this.state.enableHeroBans}
            bucket={this.state.heroBans}
            handler={this.banFormChange.bind(this,'heroBans')}
          />
        </Row>
      </div>
    )
  }
}
