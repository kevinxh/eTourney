import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import Checkbox from 'react-bootstrap/lib/Checkbox'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Col from 'react-bootstrap/lib/Col'
import HelpBlock from 'react-bootstrap/lib/HelpBlock'
import { userSignin } from '../../actions/auth-actions'

class SigninForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value })
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value })
  }

  handleClick(e) {
    e.preventDefault()
    this.props.userSignin(this.state.email, this.state.password)
  }

  render() {
    return (
      <Form horizontal>
        <FormGroup controlId="email">
        <div className="formInput">
          <Col componentClass={ControlLabel} smOffset={2} sm={1}>
            <i className="fa fa-envelope fa-lg" aria-hidden="true"></i>
          </Col>
          <Col sm={6}>
            <FormControl
              bsClass="inputBox"
              type="email"
              value={this.state.email}
              placeholder="邮箱"
              onChange={this.handleEmailChange}
            />
          </Col>
          </div>
        </FormGroup>

        <FormGroup controlId="password">
          <div className="formInput">
          <Col componentClass={ControlLabel} smOffset={2} sm={1}>
            <i className="fa fa-key fa-lg" aria-hidden="true"></i>
          </Col>
          <Col sm={6}>
            <FormControl
              bsClass="inputBox"
              type="password"
              value={this.state.password}
              placeholder="密码"
              onChange={this.handlePasswordChange}
            />
          </Col>
          </div>
        </FormGroup>
        <FormGroup>
        <Checkbox inline>
         记住密码
        </Checkbox>
        </FormGroup>
        <Col smOffset={3} sm={6}>
          <div className="has-error">
            <HelpBlock>{this.props.error}</HelpBlock>
          </div>
        </Col>
        <FormGroup>
          <Col smOffset={3} sm={6}>
            <button className="btn btn-large btn-border-black" type="submit" onClick={this.handleClick}>
              登录
            </button>
          </Col>
        </FormGroup>
        <div>
          <a className="forgetPW" href="#">忘记密码?</a>
        </div>
      </Form>

    )
  }
}

SigninForm.propTypes = {
  waiting: React.PropTypes.bool.isRequired,
  isAuthenticated: React.PropTypes.bool.isRequired,
}

SigninForm.defaultProps = {
  waiting: false,
  isAuthenticated: false,
}

function mapStateToProps(state) {
  return {
    waiting: state.Auth.signin.waiting,
    error: state.Auth.signin.error,
    isAuthenticated: state.Auth.isAuthenticated,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ userSignin }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm)
