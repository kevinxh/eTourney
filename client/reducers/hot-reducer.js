import * as actionTypes from '../actions/action-types';
import { combineReducers } from 'redux';

// const initialState = 'LOL';
//
// const selectedHot = function (state = initialState, action) {
//   switch (action.type) {
//     case actionTypes.HOT_SELECT:
//       return action.tournament;
//   }
//   return state;
// };
//
// const hotTournaments = function () {
//   return [
//     'LOL',
//     'GTA5',
//     '2K11',
//     'WOW',
//     '跑跑卡丁车',
//     '实况足球',
//   ];
// };

const initialTournamentList = {
  hotTournaments: [],
  selectedGame: null
}


export default function (state = initialTournamentList, action){
  switch (action.type) {
    case actionTypes.FETCH_HOTTOURNAMENT_SUCCESS:
      // console.log(action.data);
      return {...state, hotTournaments: action.data};
    default:
      return state;
  }
}

// export default combineReducers({
//   selectedHot,
//   hotTournaments,
// });
