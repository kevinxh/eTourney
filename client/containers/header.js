import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { modalAction } from '../actions/modal-actions';

import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavbarBrand from 'react-bootstrap/lib/NavbarBrand';
import NavbarToggle from 'react-bootstrap/lib/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/lib/NavbarCollapse';
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';
import SigninModal from '../components/auth/signin-modal';
import SignupModal from '../components/auth/signup-modal';

import { SIGNIN, SIGNUP } from '../constants';
import { MODAL_OPEN } from '../actions/action-types';

require('../components/style/_header.scss');

class Header extends Component {
  render() {
    return (
      <Navbar fluid fixedTop>
        <NavbarHeader>
          <NavbarBrand>
            <a href="#">React-Bootstrap</a>
          </NavbarBrand>
          <NavbarToggle />
        </NavbarHeader>
        <NavbarCollapse>
          <Nav pullRight>
            <NavItem
              eventKey={1}
              onClick={() => this.props.modalAction(SIGNIN, MODAL_OPEN)}
              href="#"
            >Sign In</NavItem>
            <NavItem
              eventKey={2}
              onClick={() => this.props.modalAction(SIGNUP, MODAL_OPEN)}
              href="#"
            >Sign Up</NavItem>
          </Nav>
        </NavbarCollapse>

        <SigninModal
          show={this.props.showSignin}
          onHide={this.props.modalAction}
        />
        <SignupModal
          show={this.props.showSignup}
          onHide={this.props.modalAction}
        />
      </Navbar>
    );
  }
}

Header.propTypes = {
  showSignin: React.PropTypes.bool.isRequired,
  showSignup: React.PropTypes.bool.isRequired,
  modalAction: React.PropTypes.func.isRequired,
};

Header.defaultProps = {
  showSignin: false,
  showSignup: false,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ modalAction }, dispatch);
}

function mapStateToProps(state) {
  return {
    showSignin: state.Modal.showSignin,
    showSignup: state.Modal.showSignup,
    isAuthenticated: state.Auth.isAuthenticated,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
