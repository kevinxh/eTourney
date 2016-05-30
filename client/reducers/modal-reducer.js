import { MODAL_OPEN, MODAL_CLOSE } from '../actions/action-types';
import { SIGNIN_MODAL, SIGNUP_MODAL } from '../constants';

const initialModal = {
  showLoginRegister: false,
};

export default function (state = initialModal, action) {
  switch (action.type) {
    case MODAL_OPEN:
        return { ...state, showLoginRegister: true };
    case MODAL_CLOSE:
        return { ...state, showLoginRegister: false };
  }
  return state;
}
