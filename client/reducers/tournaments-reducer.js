import { FETCH_TOURNAMENTS_SUCCESS } from '../actions/action-types';
import * as gameTypes from '../constants/tournaments';

const initialTournamentList = {
  tournaments: [

  ]
};

export default function (state = initialTournamentList, action){
  switch (action.type) {
    case FETCH_TOURNAMENTS_SUCCESS:
      return {...state,tournaments:action.data};
      break;
    default:
      return state;

  }
}
