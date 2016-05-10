import * as actionTypes from '../actions/action-types';

const initialAuth = {
  isAuthenticated: false,
  signin: {
    error:null,
    waiting:false,
  },
  signup: {
    error:null,
    waiting:false,
  },
  email: null,
};

export default function (state = initialAuth, action) {
  switch (action.type) {
    case actionTypes.SIGNIN_WAITING:
      return { ...state, isAuthenticated: false, signin: { error: null, waiting: true } };
    case actionTypes.SIGNIN_SUCCESS:
      return { ...state, isAuthenticated: true, signin: { error: null, waiting: false }, email: action.email };
    case actionTypes.SIGNIN_ERROR:
      return { ...state, isAuthenticated: false, signin: { error: action.error, waiting: false } };
    case actionTypes.SIGNUP_WAITING:
      return { ...state, isAuthenticated: false, signup: { error: null, waiting: true } };
    case actionTypes.SIGNUP_ERROR:
      return { ...state, isAuthenticated: false, signup: { error: action.error, waiting: false } };
    case actionTypes.SIGNOUT:
      return { ...state, isAuthenticated: false, signup: { error: null, waiting: false }, signin: { error: null, waiting: false }, email: null };
  }
  return state;
}
