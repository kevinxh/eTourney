import React, { Component, PropTypes } from 'react'
import Input from 'react-toolbox/lib/input'

// Source:
// https://scotch.io/tutorials/google-material-design-input-boxes-in-css3

class SearchBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchKeyword: ''
    }
  }
  _onTextChange(text) {
    // TODO: Move the debounce in here
    this.setState({
      searchKeyword: text
    })
    this.props.inputHandler(text)
  }
  render() {
    const { placeholder, inputHandler } = this.props
    return (
      <div className="search-box">
        <Input
          type={'text'}
          label={'遊戲搜尋'}
          value={this.state.searchKeyword}
          onChange={this._onTextChange.bind(this)}

        />

      </div>
    )
  }
}

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  inputHandler: PropTypes.func
}

export default SearchBox
