import { SELECT_GAME } from './games-actions';

export const selectGame = (gameId) => {
  return {
    type: SELECT_GAME,
    gameId
  };
};
