import * as actionTypes from './action-types';

export const userSignin = (email, password) => {
  return {
    type: actionTypes.SIGNIN_REQUEST,
    email,
    password,
  };
};

export const userSignup = (email, password) => {
  return {
    type: actionTypes.SIGNUP_REQUEST,
    email,
    password,
  };
};

export const userSignout = () => { return { type: actionTypes.SIGNOUT } };
