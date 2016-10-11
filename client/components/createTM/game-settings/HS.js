import React, { Component } from 'react'

export default class GameSettingsLOL extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (item, value) {
    // this.setState({...this.state, [item]: value});
  };
  render() {
    return (
      <div>Hearthstone</div>
    )
  }
}
