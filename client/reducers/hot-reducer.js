import * as actionTypes from '../actions/action-types';
import { combineReducers } from 'redux';

const initialState = 'LOL';

const selectedHot = function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.HOT_SELECT:
      return action.tournament;
  }
  return state;
};

const hotTournaments = function () {
  return [
    'LOL',
    'GTA5',
    '2K11',
  ];
};

export default combineReducers({
  selectedHot,
  hotTournaments,
});
