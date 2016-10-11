import React, { Component } from 'react'

export default class TabContent extends Component {
  bindChildren() {
    const bindedChildren = []
    this.props.children.forEach(child => {
      bindedChildren.push(React.cloneElement(child, {
        switchTab: this.props.switchTab,
      }))
    })
    return bindedChildren
  }

  render() {
    const children = this.bindChildren()
    return <div className={this.props.className}>{children}</div>
  }
}
