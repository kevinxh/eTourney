import React, { Component } from 'react'
import Input from '../form-elements/input'
//import DatePicker from 'react-toolbox/lib/date_picker'
import Dropdown from 'react-toolbox/lib/dropdown';

const countries = [
  { value: 'EN-gb', label: 'England' },
  { value: 'ES-es', label: 'Spain'},
  { value: 'TH-th', label: 'Thailand' },
  { value: 'EN-en', label: 'USA'}
];

export default class TabSettingLOL extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'ES-es',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value){
    this.setState({value: value});
  };

  render() {
    return (
      <div id="LOL-form">
        <div className="row">
          <div className="col-md-6">
            <Input
              id="比赛名"
              placeholder="请输入3-20位比赛名称"
            />
          </div>
          <div className="col-md-6">
          <Dropdown
      auto
      onChange={this.handleChange}
      source={countries}
      value={this.state.value}
    />
          </div>
        </div>
      </div>
      )
  }
}
