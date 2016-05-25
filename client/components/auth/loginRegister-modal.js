import React, { Component } from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import SigninForm from './signin-form';
import SignupForm from './signup-form';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import { SIGNIN_MODAL } from '../../constants';
import { MODAL_CLOSE } from '../../actions/action-types';

export default class SigninModal extends Component {
  render() {
    return (
      <div>
        <Modal
          show={this.props.show}
          onHide={() => this.props.onHide(SIGNIN_MODAL, MODAL_CLOSE)}
        >
          <Modal.Header closeButton />
          <Tabs>
            <TabLink to="login" default >Login</TabLink>
            <TabLink to="register" >Register</TabLink>
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
