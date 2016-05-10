import * as actionTypes from './action-types';

export const userSignin = (email, password) => {
  return {
    type: actionTypes.SIGNIN_REQUEST,
    email,
    password,
  };
};
