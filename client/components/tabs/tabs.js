import React, { Component } from 'react'

export default class Tabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeKey: props.defaultTab,
      disabledKeys: [],
    }
    this.switchTab = this.switchTab.bind(this)
    this.getDisabledKeys = this.getDisabledKeys.bind(this)
  }

  componentWillMount() {
    this.setState({
      totalTabs: this.getTotalTabs(),
      disabledKeys: this.getDisabledKeys(),
    })
  }

  getTotalTabs() {
    let totalTabs = 0
    this.props.children.forEach(child => {
      if (child.type.name === 'TabLink') {
        totalTabs++
      }
    })
    return totalTabs
  }

  getDisabledKeys() {
    let disabledKeys = []
    if (this.props.autoDisable) {
      this.props.children.forEach(child => {
        if (child.type.name === 'TabLink') {
          if (child.props.eventKey !== this.props.defaultTab) {
            disabledKeys.push(child.props.eventKey)
          }
        }
      })
    }
    return disabledKeys
  }

  bindSwitchTab() {
    const bindedTabLinks = []
    this.props.children.forEach(child => {
      if (child.type.name === 'TabLink') {
        let disable = false
        this.state.disabledKeys.forEach(key => {
          if (key === child.props.eventKey) {
            disable = true
          }
        })
        bindedTabLinks.push(React.cloneElement(child, {
          switchTab: this.switchTab,
          activeKey: this.state.activeKey,
          disable,
        }))
      }
    })
    return bindedTabLinks
  }

  switchTab(eventKey) {
    this.setState({
      activeKey: eventKey,
      disabledKeys: this.state.disabledKeys.filter(item => item !== eventKey),
    })
  }

  renderContent() {
    const bindedTabContents = []
    this.props.children.forEach(child => {
      if (child.type.name === 'TabContent') {
        bindedTabContents.push(React.cloneElement(child, {
          switchTab: this.switchTab,
        }))
      }
    })
    return bindedTabContents
  }

  render() {
    const bindedTabLinks = this.bindSwitchTab()
    const content = this.renderContent()
    return (
      <div className={this.props.className}>
        <div className="tab-links-wrapper">
          {bindedTabLinks}
        </div>
        {content}
      </div>
    )
  }
}
