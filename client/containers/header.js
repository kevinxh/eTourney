import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { modalAction } from '../actions/modal-actions';
import { userSignout } from '../actions/auth-actions';

import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavbarBrand from 'react-bootstrap/lib/NavbarBrand';
import NavbarToggle from 'react-bootstrap/lib/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/lib/NavbarCollapse';
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import LoginRegisterModal from '../components/auth/loginRegister-modal';
import { SIGNIN_MODAL } from '../constants';
import { MODAL_OPEN } from '../actions/action-types';

require('../components/style/_header.scss');

class Header extends Component {


  renderUserNav() {
    if (this.props.isAuthenticated && this.props.email) {
      return (
        <Nav pullRight>
          <NavDropdown eventKey={3} title="User" id="basic-nav-dropdown">
            <MenuItem
              eventKey={3.1}
              onClick={() => this.props.userSignout()}
            >Sign out</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.2}>Signed in as: {this.props.email}</MenuItem>
          </NavDropdown>
        </Nav>
      );
    } else {
      return (
        <Nav pullRight>
          <NavItem
            eventKey={1}
            onClick={() => this.props.modalAction(SIGNIN_MODAL, MODAL_OPEN)}
            href="#"
          >Login & Register</NavItem>
        </Nav>);
    }
  }

  render() {
    return (
      <Navbar fluid fixedTop>
        <NavbarHeader>
          <NavbarBrand>
            <a href="/">React-Bootstrap</a>
          </NavbarBrand>
          <NavbarToggle />
        </NavbarHeader>
        <NavbarCollapse>
          <Nav pullLeft>
            <li role="presentation">
              <Link to="/find">Find Tournament</Link>
            </li>
            <li role="presentation">
              <Link to="/create">Create Tournament</Link>
            </li>
            <li role="presentation">
              <Link to="/features">Features</Link>
            </li>
          </Nav>
            {this.renderUserNav()}
        </NavbarCollapse>

        <LoginRegisterModal
          show={this.props.showLoginRegister}
          onHide={this.props.modalAction}
        />
      </Navbar>
    );
  }
}

Header.propTypes = {
  showLoginRegister: React.PropTypes.bool.isRequired,
  isAuthenticated: React.PropTypes.bool.isRequired,
  modalAction: React.PropTypes.func.isRequired,
};

Header.defaultProps = {
  showLoginRegister: false,
  isAuthenticated: false,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ modalAction, userSignout }, dispatch);
}

function mapStateToProps(state) {
  return {
    showLoginRegister: state.Modal.showLoginRegister,
    isAuthenticated: state.Auth.isAuthenticated,
    email: state.Auth.email,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
