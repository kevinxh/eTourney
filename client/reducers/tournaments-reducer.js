import * as actionTypes from '../actions/action-types';
import * as gameTypes from '../constants/tournaments';

const initialTournamentList = {
  tournaments: [],
  hotTournaments: [],
};

export default function (state = initialTournamentList, action){
  switch (action.type) {
    case actionTypes.FETCH_TOURNAMENTS_SUCCESS:
      return { ...state, tournaments: action.data.tournaments};
    case actionTypes.FETCH_HOTTOURNAMENT_SUCCESS:
      return { ...state, hotTournaments: action.data.hotTournament};
    default:
      return state;
  }
}
