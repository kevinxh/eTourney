import React, { Component } from 'react'
import { browserHistory } from 'react-router'


export default class TabLink extends Component {
  constructor(props) {
    super(props)
    console.log(this.props);
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.props.switchTab(this.props.eventKey)
    // TODO: Manually perform click animations here
    browserHistory.push(this.props.link)
  }

  render() {
    let { title, className, eventKey, activeKey, disable } = this.props
    let customClass = ''
    let activeClass = ''
    let disableClass = ''
    if (className) {
      customClass = className
    }
    if (eventKey === activeKey) {
      activeClass = 'active'
    }
    if (disable) {
      disableClass = 'disabled'
    }
    let classes = `tab-link ${customClass} ${activeClass} ${disableClass}`
    return (
      <div onClick={this.onClick} className={classes}>
        <a href="#">{title}</a>
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
