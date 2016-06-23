import * as actionTypes from './action-types';

export function hotSelect(tournament) {
  return {
    type: actionTypes.HOT_SELECT,
    tournament,
  };
}
