import * as actionTypes from '../actions/action-types';

export default function (state=null,action) {
  switch (action.type) {
    case actionTypes.MAINPAGEGAMEISSELECTED:
      return action.value;
  }
  return state;

}
