import React, { Component } from 'react'

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: true,
    }
  }
  render() {
    const { placeholder,
            id,
            type,
          } = this.props
    const labelClass = this.state.active ? 'active' : ''
    return (
      <div className="input-field">
        <input placeholder={placeholder} id={id} type={type} />
        <label htmlFor="abc" className={labelClass}>{id}</label>
      </div>
		)
  }
}

Input.propTypes = {
  id: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  type: React.PropTypes.string,
}
Input.defaultProps = {
  type: 'text',
}
