import { SELECT_GAME, FETCH_GAMES, FETCH_TOP_GAMES } from './action-types';

export const selectGame = (gameId) => {
  return {
    type: SELECT_GAME,
    gameId
  };
};
export const fetchGames = () => {
  return {
    type: FETCH_GAMES
  };
};
export const fetchTopGames = () => {
  return {
    type: FETCH_TOP_GAMES
  }
}
