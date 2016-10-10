import React, { Component } from 'react'

import Input from 'react-toolbox/lib/input'
import Dropdown from 'react-toolbox/lib/dropdown'
import DatePicker from 'react-toolbox/lib/date_picker'
import TimePicker from 'react-toolbox/lib/time_picker'
import Checkbox from 'react-toolbox/lib/checkbox'

const mode = [
  { value: '1v1', label: '单挑' },
  { value: '3v3', label: '3v3'},
  { value: '5v5', label: '5v5' },
];

const server = [
  { value: 'China', label: '国服' },
  { value: 'Taiwan', label: '台服' },
  { value: 'US', label: '美服'},
  { value: 'Korea', label: '韩服' },
  { value: 'Europe', label: '欧服' },
];

export default class TabSettingLOL extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: '5v5',
      server: 'China',
      capacityCheck: false,
      passwordCheck: false,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (item, value) {
    this.setState({...this.state, [item]: value});
  };

  render() {
    let {capacityCheck, passwordCheck} = this.state
    let capacityVisibility = (capacityCheck) ? {} : { display: 'none' }
    let passwordVisibility = (passwordCheck) ? {} : { display: 'none' }
    return (

      <div id="LOL-form">
        <div className="row">
          <div className="col-md-12">
            <Input
              type='text'
              label='比赛名称'
              multiline
              required
              value={this.state.name}
              onChange={this.handleChange.bind(this, 'name')}
              maxLength={16}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <DatePicker
              label='比赛开始日期'
              onChange={this.handleChange.bind(this, 'startDate')}
              value={this.state.startDate}
            />
          </div>
          <div className="col-md-6">
          <TimePicker
            label='比赛开始时间'
            onChange={this.handleChange.bind(this, 'startTime')}
            value={this.state.startTime}
          />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Dropdown
              auto
              onChange={this.handleChange.bind(this, 'mode')}
              source={mode}
              value={this.state.mode}
            />
          </div>
          <div className="col-md-6">
            <Dropdown
              auto
              allowBlank
              onChange={this.handleChange.bind(this, 'server')}
              source={server}
              value={this.state.server}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Input
              type='text'
              label='比赛规则'
              multiline
              hint='sidf'
              required
              value={this.state.rules}
              onChange={this.handleChange.bind(this, 'rules')}
              maxLength={300}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Checkbox
              checked={this.state.capacityCheck}
              label="是否有人数限制"
              onChange={this.handleChange.bind(this, 'capacityCheck')}
            />
          </div>
          <div className="col-md-2" style={capacityVisibility}>
            <Input
              type='text'
              label='人数'
              required
              value={this.state.capacity}
              onChange={this.handleChange.bind(this, 'capacity')}
              maxLength={4}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Checkbox
              checked={this.state.passwordCheck}
              label="是否加密"
              onChange={this.handleChange.bind(this, 'passwordCheck')}
            />
          </div>
          <div className="col-md-6" style={passwordVisibility}>
            <Input
              type='password'
              label='密码'
              required
              value={this.state.password}
              onChange={this.handleChange.bind(this, 'password')}
            />
          </div>
        </div>
      </div>
      )
  }
}
