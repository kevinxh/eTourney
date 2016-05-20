import { SELECT_GAME, FETCH_GAME } from '../actions/action-types';

const initialGameList = {
  games: [
    { name: 'HurtStone', id: 1 },
    { name: 'CSPRO', id: 2 },
    { name: 'GOATA2', id: 3 },
    { name: 'abc', id: 4 },
    { name: 'AB', id: 5 },
    { name: '123', id: 6 }
  ],
  selectedGame: null
}


export default function (state = initialGameList, action){
  switch (action.type) {
    case SELECT_GAME:
      return {...state, selectedGame: action.game};
      // break;
    case FETCH_GAME:
      return {...state, selectedGame: state.games.filter(
          (obj)=> {return obj.id === parseInt(action.gameId)}
        )[0]};
    default:
      return state;
  }
}
