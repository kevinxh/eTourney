import React, { Component } from 'react';
import Modal from 'react-bootstrap/lib/Modal';

export default class SigninModal extends Component {

  render() {
    return (
      <Modal show={this.props.show}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Text in a modal</h4>
        </Modal.Body>
        <Modal.Footer>
          <h4>footer</h4>
        </Modal.Footer>
      </Modal>
    );
  }
}
