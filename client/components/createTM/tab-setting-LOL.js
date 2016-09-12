import React, { Component } from 'react'
import Input from '../form-elements/input'
import DatePicker from 'react-datepicker'
import moment from 'moment'

export default class TabSettingLOL extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment(),
      endDate: moment(),
    }
    this.handleStartDateChange = this.handleStartDateChange.bind(this)
    this.handleEndDateChange = this.handleEndDateChange.bind(this)
  }

  handleStartDateChange(startDate) {
    this.setState({
      startDate,
    })
  }

  handleEndDateChange(endDate) {
    this.setState({
      endDate,
    })
  }

  render() {
    return (
      <div>
        <Input
          id="比赛名"
          placeholder="请输入3-20位比赛名称"
        />
        <DatePicker
          todayButton={"今天"}
          selected={this.state.startDate}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleStartDateChange}
        />
        <DatePicker
          todayButton={"今天"}
          selected={this.state.endDate}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleEndDateChange}
        />
      </div>)
  }
}
