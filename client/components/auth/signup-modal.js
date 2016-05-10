import React, { Component } from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import SignupForm from './signup-form';
import { SIGNUP_MODAL } from '../../constants';
import { MODAL_CLOSE } from '../../actions/action-types';

export default class SignupModal extends Component {
  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={() => this.props.onHide(SIGNUP_MODAL, MODAL_CLOSE)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign up form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignupForm />
        </Modal.Body>
      </Modal>
    );
  }
}

SignupModal.propTypes = {
  show: React.PropTypes.bool.isRequired,
  onHide: React.PropTypes.func.isRequired,
};
