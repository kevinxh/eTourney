import * as actionTypes from '../actions/action-types';

const initialModal = {
  isAuthenticated: false,
  error:null,
};

export default function (state = initialModal, action) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true, error: null };
    case actionTypes.LOGIN_ERROR:
      return { ...state, isAuthenticated: true, error: action.error };
  }
  return state;
}
