import React, { Component } from 'react'

export default class TabLink extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.props.switchTab(this.props.eventKey)
  }

  render() {
    let { title, eventKey, activeKey } = this.props
    let active = ''
    if (eventKey === activeKey) {
      active = 'active'
    }
    let classes = `${this.props.className} ${active}`
    return (
      <div className={classes}>
        <a onClick={this.onClick} href="#">{title}</a>
      </div>
    )
  }
}

TabLink.propTypes = {
  activeKey:        React.PropTypes.string.isRequired,
  eventKey:         React.PropTypes.string.isRequired,
  switchTab:        React.PropTypes.func.isRequired,
  title:            React.PropTypes.string.isRequired,
  className:        React.PropTypes.string,
}
