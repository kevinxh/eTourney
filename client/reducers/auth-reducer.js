import * as actionTypes from '../actions/action-types';

const initialModal = {
  isAuthenticated: false,
  error:null,
  waiting:false,
};

export default function (state = initialModal, action) {
  switch (action.type) {
    case actionTypes.SIGNIN_WAITING:
      return { ...state, isAuthenticated: false, error: null, waiting: true };
    case actionTypes.SIGNIN_SUCCESS:
      return { ...state, isAuthenticated: true, error: null, waiting: false };
    case actionTypes.SIGNIN_ERROR:
      return { ...state, isAuthenticated: false, error: action.error, waiting: false };
  }
  return state;
}
