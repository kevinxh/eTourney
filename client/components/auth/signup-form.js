import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Col from 'react-bootstrap/lib/Col';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import { userSignup } from '../../actions/auth-actions';

class SignupForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    this.props.userSignup(this.state.email, this.state.password);
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
        <Col smOffset={2} sm={10}>
          <div className="has-error">
            <HelpBlock>{this.props.error}</HelpBlock>
          </div>
        </Col>
        <FormGroup>
          <Col smOffset={3} sm={6}>
            <button className="btn btn-large btn-border-black" type="submit" onClick={this.handleClick}>
              注册
            </button>
          </Col>
        </FormGroup>
      </Form>

    );
  }
}

SignupForm.propTypes = {
  waiting: React.PropTypes.bool.isRequired,
  isAuthenticated: React.PropTypes.bool.isRequired,
};

SignupForm.defaultProps = {
  waiting: false,
  isAuthenticated: false,
};

function mapStateToProps(state) {
  return {
    waiting: state.Auth.signup.waiting,
    error: state.Auth.signup.error,
    isAuthenticated: state.Auth.isAuthenticated,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ userSignup }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
