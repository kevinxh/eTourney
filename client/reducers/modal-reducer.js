import { MODAL_OPEN, MODAL_CLOSE } from '../actions/action-types';
import { SIGNIN_MODAL, SIGNUP_MODAL } from '../constants';

const initialModal = {
  showSignin: false,
  showSignup: false,
};

export default function (state = initialModal, action) {
  switch (action.type) {
    case MODAL_OPEN:
      if (action.modal == SIGNIN_MODAL) {
        return { ...state, showSignin: true };
      } else if (action.modal == SIGNUP_MODAL) {
        return { ...state, showSignup: true };
      }
    case MODAL_CLOSE:
      if (action.modal == SIGNIN_MODAL) {
        return { ...state, showSignin: false };
      } else if (action.modal == SIGNUP_MODAL) {
        return { ...state, showSignup: false };
      }
  }
  return state;
}
