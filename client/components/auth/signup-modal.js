import React, { Component } from 'react';
import Modal from 'react-bootstrap/lib/Modal';
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
          <h4>Sign up form</h4>
        </Modal.Body>
        <Modal.Footer>
          <h4>Sign up form</h4>
        </Modal.Footer>
      </Modal>
    );
  }
}

SignupModal.propTypes = {
  show: React.PropTypes.bool.isRequired,
  onHide: React.PropTypes.func.isRequired,
};
