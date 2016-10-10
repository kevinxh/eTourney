import React, { Component } from 'react'
import Modal from 'react-bootstrap/lib/Modal'
import SigninForm from './signin-form'
import SignupForm from './signup-form'
import { LOGIN_REGISTER_MODAL } from '../../constants'
import { MODAL_CLOSE } from '../../actions/action-types'
import Tabs from '../tabs/tabs.js'
import TabLink from '../tabs/tab-link.js'
import TabContent from '../tabs/tab-content.js'

export default class LoginRegisterModal extends Component {
  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={() => this.props.onHide(LOGIN_REGISTER_MODAL, MODAL_CLOSE)}
        dialogClassName="cusModal"
      >
        <div className="logo">
          <img src="http://media.techonline.com/img/tmp/logo-placeholder.png" alt="logo" />
        </div>
        <Tabs defaultTab="1" className="tabs-center">
          <TabLink key="login" title="登录" eventKey="1" className="tab-link-sm" />
          <TabLink key="signup" title="注册" eventKey="2" className="tab-link-sm" />
          <TabContent eventKey="1" className="tab-content">
            <div>
              <SigninForm />
            </div>
          </TabContent>
          <TabContent eventKey="2" className="tab-content">
            <div>
              <SignupForm />
            </div>
          </TabContent>
        </Tabs>
      </Modal>
    )
  }
}

LoginRegisterModal.propTypes = {
  show: React.PropTypes.bool.isRequired,
  onHide: React.PropTypes.func.isRequired,
}
