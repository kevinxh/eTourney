import React, { Component } from 'react';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';

import axios from 'axios';

export default class SigninForm extends Component {

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

  handleClick() {
    console.log('email: ' + this.state.email);
    console.log('password: ' + this.state.password);
    axios({
      method: 'post',
      url: 'http://localhost:8080/auth/login',
      data: {
        email: this.state.email,
        password: this.state.password,
      }
    })
    .then(response => {
      console.log('response success: ' + response.data.success);
      console.log('response status: ' + response.status);
      console.log('response access token: ' + response.data.access_token);
    });
  }

  render() {
    return (
      <Form horizontal>
        <FormGroup controlId="email">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl
              type="email"
              value={this.state.email}
              placeholder="Email"
              onChange={this.handleEmailChange}
            />
          </Col>
        </FormGroup>

        <FormGroup controlId="password">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl
              type="password"
              value={this.state.password}
              placeholder="Password"
              onChange={this.handlePasswordChange}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button onClick={this.handleClick}>
              Sign in
            </Button>
          </Col>
        </FormGroup>
      </Form>

    );
  }
}
