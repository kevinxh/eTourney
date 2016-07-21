import React, { Component, PropTypes } from 'react';

// Source:
// https://scotch.io/tutorials/google-material-design-input-boxes-in-css3

class SearchBox extends Component {
  render() {
    const { placeholder } = this.props;
    return (
      <div className="search-box">
        <input type="text" placeholder={placeholder} />
        <span className="highlight"></span>
        <span className="bar"></span>
      </div>
    )
  }
}

SearchBox.propTypes = {
  placeholder: PropTypes.string
}

export default SearchBox;
