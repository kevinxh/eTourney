import React, { Component } from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import SigninForm from './signin-form';
import SignupForm from './signup-form';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import { SIGNIN_MODAL } from '../../constants';
import { MODAL_CLOSE } from '../../actions/action-types';
require('../style/_header.scss');

export default class SigninModal extends Component {
  render() {
    return (
      <div>
        <Modal
          show={this.props.show}
          onHide={() => this.props.onHide(SIGNIN_MODAL, MODAL_CLOSE)}
        >
          <Modal.Header closeButton />
          <Tabs id="window">
            <div className="buttons">
              <button className="btn btn-link" id="login"><TabLink to="login">
              Login</TabLink></button>
              <button className="btn btn-link"><TabLink to="register">
              Register</TabLink></button>
            </div>
            <div>
              <TabContent for="login"><SigninForm /></TabContent>
              <TabContent for="register"><SignupForm /></TabContent>
            </div>
          </Tabs>
        </Modal>
      </div>
    );
  }
}

SigninModal.propTypes = {
  show: React.PropTypes.bool.isRequired,
  onHide: React.PropTypes.func.isRequired,
};
