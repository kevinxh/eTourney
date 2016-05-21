import * as actionTypes from './action-types';

export const selectGame = (game) => {
  return {
    type: actionTypes.SELECT_GAME,
    game,
  };
};

export const selectTabState = (tab) => {
  return {
    type: actionTypes.SELECT_STATE,
    tab,
  };
};

export const selectedTabNotCompleted = (tab) => {
  return {
    type: actionTypes.SELECT_TABNOTCOMPLETED,
    tab,
  };
};
