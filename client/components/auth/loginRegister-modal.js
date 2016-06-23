import React, { Component } from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import SigninForm from './signin-form';
import SignupForm from './signup-form';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import { LOGIN_REGISTER_MODAL } from '../../constants';
import { MODAL_CLOSE } from '../../actions/action-types';

export default class LoginRegisterModal extends Component {
  render() {
    return (
      <div>
        <Modal
          show={this.props.show}
          onHide={() => this.props.onHide(LOGIN_REGISTER_MODAL, MODAL_CLOSE)}
        >
          <Modal.Header closeButton />
          <Tabs defaultActiveKey={1} bsStyle="pills" id="loginRegisterTabs">
            <Tab eventKey={1} title="登录"><br /><br /><br /><SigninForm /></Tab>
            <Tab eventKey={2} title="注册"><br /><br /><br /><SignupForm /></Tab>
          </Tabs>
        </Modal>
      </div>
    );
  }
}

LoginRegisterModal.propTypes = {
  show: React.PropTypes.bool.isRequired,
  onHide: React.PropTypes.func.isRequired,
};
