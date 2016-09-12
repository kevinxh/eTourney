import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { modalAction } from '../actions/modal-actions'
import { userSignout } from '../actions/auth-actions'

import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import Navbar from 'react-bootstrap/lib/Navbar'
import NavbarBrand from 'react-bootstrap/lib/NavbarBrand'
import NavbarToggle from 'react-bootstrap/lib/NavbarToggle'
import NavbarCollapse from 'react-bootstrap/lib/NavbarCollapse'
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import LoginRegisterModal from '../components/auth/loginRegister-modal'
import { LOGIN_REGISTER_MODAL } from '../constants'
import { MODAL_OPEN } from '../actions/action-types'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isTop: true,
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    let position = 0
    const isTop = this.state.isTop
    if (typeof(window.pageYOffset) === 'number') {
      // Netscape
      position = window.pageYOffset
    } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
      // DOM
      position = document.body.scrollTop
    } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
      // IE6 standards compliant mode
      position = document.documentElement.scrollTop
    }
    if (position <= 10 && isTop === false) {
      this.setState({ isTop: true })
    } else if (position > 10 && isTop === true) {
      this.setState({ isTop: false })
    }
  }

  toggleTransparency() {
    if (this.state.isTop && this.props.path === '/') {
      return 'header-transparent'
    }
    return ''
  }

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
      )
    } else {
      return (
        <Nav pullRight>
          <NavItem
            eventKey={1}
            onClick={() => this.props.modalAction(LOGIN_REGISTER_MODAL, MODAL_OPEN)}
            href="#"
          >登录 & 注册</NavItem>
        </Nav>)
    }
  }

  render() {
    // todo: navigation active link according to routing path
    return (
      <Navbar bsClass="header" className={this.toggleTransparency()} fluid fixedTop>
        <NavbarHeader>
          <NavbarBrand>
            <Link to="/">
              <img src="http://placehold.it/40x40?text=logo" alt="Logo" />
            </Link>
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
    )
  }
}

Header.propTypes = {
  showLoginRegister: React.PropTypes.bool.isRequired,
  isAuthenticated: React.PropTypes.bool.isRequired,
  modalAction: React.PropTypes.func.isRequired,
  userSignout: React.PropTypes.func.isRequired,
  path: React.PropTypes.string.isRequired,
  email: React.PropTypes.string,
}

Header.defaultProps = {
  showLoginRegister: false,
  isAuthenticated: false,
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ modalAction, userSignout }, dispatch)
}

function mapStateToProps(state) {
  return {
    path: state.routing.locationBeforeTransitions.pathname,
    showLoginRegister: state.Modal.showLoginRegister,
    isAuthenticated: state.Auth.isAuthenticated,
    email: state.Auth.email,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
