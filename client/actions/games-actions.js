import { SELECT_GAME, FETCH_GAME, FETCH_GAMES } from './action-types';

export const selectGame = (game) => {
  return {
    type: SELECT_GAME,
    game
  };
};

export const fetchGame = (gameId) => {
  return {
    type: FETCH_GAME,
    gameId
  };
};

export const fetchGames = () => {
  return {
    type: FETCH_GAMES
  };
};
