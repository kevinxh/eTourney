import { SELECT_GAME, FETCH_GAME, FETCH_GAMES } from '../actions/action-types';

const initialGameList = {
  games: [],
  selectedGame: null
}


export default function (state = initialGameList, action){
  switch (action.type) {
    case SELECT_GAME:
      return {...state, selectedGame: action.game};
      // break;
    case FETCH_GAME:
    // return {...state, selectedGame: { name: 'HurtStone', id: 1 }}
      return {...state, selectedGame: state.games.filter(
          (obj)=> {return obj.id === parseInt(action.gameId)}
        )[0]};
    case FETCH_GAMES:
      return {...state, games: action.data};
    default:
      return state;
  }
}
