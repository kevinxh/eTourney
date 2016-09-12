import * as actionTypes from './action-types'

export function hotSelect(tournament) {
  return {
    type: actionTypes.HOT_SELECT,
    tournament,
  }
}

export const fetchHotTournament = () => {
  return {
    type: actionTypes.HOT_TOURNAMENT_FETCH,
  }
}
