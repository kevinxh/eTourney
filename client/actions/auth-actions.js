import * as actionTypes from './action-types';

export const userSignin = (email, password) => {
  return {
    type: actionTypes.LOGIN_REQUEST,
    email,
    password,
  };
};
