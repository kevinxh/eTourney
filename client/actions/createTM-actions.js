import * as actionTypes from './action-types';

export const selectGame = (game) => {
  return {
    type: actionTypes.SELECT_GAME,
    game,
  };
};

export const selectTab = (tab) => {
  return {
    type: actionTypes.SELECT_TAB,
    tab,
  };
};

// toggleTab can enable/disable create tournament tabs
// variable "disabled" is a boolean,
// if "disabled" is false, then the tab is enabled, vise versa.
// variable "tab" is an integer
export const toggleTab = (tab, disabled) => {
  return {
    type: actionTypes.TOGGLE_TAB,
    tab,
    disabled,
  };
};
