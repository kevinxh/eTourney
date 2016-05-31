import * as actionTypes from '../actions/action-types';

export default function (state= null, action){
  switch (action.type) {
    case actionTypes.FAV_TM_SELECT:
      return action.value;
  }
  return state;

}
