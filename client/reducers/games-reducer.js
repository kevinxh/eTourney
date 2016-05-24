import { SELECT_GAME, FETCH_GAMES } from '../actions/action-types';

const initialGameList = {
  games: [],
  selectedGame: null
}


export default function (state = initialGameList, action){
  switch (action.type) {
    case SELECT_GAME:
      return {...state, selectedGame: action.data};
      // break;
    case FETCH_GAMES:
      return {...state, games: action.data};
    default:
      return state;
  }
}
