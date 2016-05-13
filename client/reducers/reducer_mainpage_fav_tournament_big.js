import * as actionTypes from '../actions/action-types';

export default function (state=null,action) {
  switch (action.type) {
    case actionTypes.MAIN_PAGE_TOURNAMENT_SELECTED:
      return action.value;
  }
  return state;

}
