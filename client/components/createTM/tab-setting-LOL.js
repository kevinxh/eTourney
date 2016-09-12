import React, { Component } from 'react'
import Input from '../form-elements/input'
//import { DatePicker } from 'react-toolbox/lib/date_picker'

export default class TabSettingLOL extends Component {
  render() {
    return (
      <div>
        <Input
          id="比赛名"
          placeholder="请输入3-20位比赛名称"
        />
      </div>)
  }
}
