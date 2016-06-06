import * as actionTypes from '../actions/action-types';
import { combineReducers } from 'redux';

const initialTournamentList = {
  hotTournaments: [],
  selectedGame: null
}


export default function (state = initialTournamentList, action){
  switch (action.type) {
    case actionTypes.FETCH_HOTTOURNAMENT_SUCCESS:
      console.log(action.data.hottournament);
      return {...state, hotTournaments: action.data.hottournament };
    default:
      return state;
  }
}
