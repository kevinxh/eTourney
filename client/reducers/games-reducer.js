import { SELECT_GAME_SUCCESS, FETCH_GAMES_SUCCESS } from '../actions/action-types';

const initialGameList = {
  games: [],
  selectedGame: null
}


export default function (state = initialGameList, action){
  switch (action.type) {
    case SELECT_GAME_SUCCESS:
      return {...state, selectedGame: action.data};
      // break;
    case FETCH_GAMES_SUCCESS:
      return {...state, games: action.data};
    default:
      return state;
  }
}
