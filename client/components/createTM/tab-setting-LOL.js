import React, { Component } from 'react'
import Input from '../form-elements/input'
//import DatePicker from 'react-toolbox/lib/date_picker/DatePicker'

export default class TabSettingLOL extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(item, value) {
    this.setState({ [item]: value })
  }

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
            
          </div>
        </div>
      </div>
      )
  }
}
