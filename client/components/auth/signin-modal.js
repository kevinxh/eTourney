import React, { Component } from 'react';
import Modal from 'react-bootstrap/lib/Modal';

import SigninForm from './signin-form';
import { SIGNIN_MODAL } from '../../constants';
import { MODAL_CLOSE } from '../../actions/action-types';

export default class SigninModal extends Component {
  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={() => this.props.onHide(SIGNIN_MODAL, MODAL_CLOSE)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign in form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SigninForm />
        </Modal.Body>
        <Modal.Footer>
          <h4>Sign in form</h4>
        </Modal.Footer>
      </Modal>
    );
  }
}

SigninModal.propTypes = {
  show: React.PropTypes.bool.isRequired,
  onHide: React.PropTypes.func.isRequired,
};
