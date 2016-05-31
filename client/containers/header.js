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
import { LOGIN_REGISTER_MODAL } from '../constants';
import { MODAL_OPEN } from '../actions/action-types';

require('../style/_header.scss');

class Header extends Component {


  renderUserNav() {
    if (this.props.isAuthenticated && this.props.email) {
      return (
        <Nav pullRight>
          <NavDropdown pullRight eventKey={3} title="用户" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>登录为: {this.props.email}</MenuItem>
            <MenuItem divider />
            <MenuItem
              eventKey={3.2}
              onClick={() => this.props.userSignout()}
            >登出</MenuItem>
          </NavDropdown>
        </Nav>
      );
    } else {
      return (
        <Nav pullRight>
          <NavItem
            eventKey={1}
            onClick={() => this.props.modalAction(LOGIN_REGISTER_MODAL, MODAL_OPEN)}
            href="#"
          >登录 & 注册</NavItem>
        </Nav>);
    }
  }

  render() {
    //todo: navigation active link according to routing path
    return (
      <Navbar bsClass="header" fluid fixedTop>
        <NavbarHeader>
          <NavbarBrand>
            <Link to="/">LOGO</Link>
          </NavbarBrand>
          <NavbarToggle />
        </NavbarHeader>
        <NavbarCollapse>
          <Nav pullLeft className="header-link-group">
            <li role="navigation">
              <Link to="/find">寻找比赛</Link>
            </li>
            <li role="navigation">
              <Link to="/create">创建属于你的比赛</Link>
            </li>
            <li role="navigation">
              <Link to="/features">功能</Link>
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
