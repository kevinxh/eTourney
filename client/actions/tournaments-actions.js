import { FETCH_TOURNAMENTS } from './action-types';

export const fetchTournaments = (gameID) => {
  return {
    type: FETCH_TOURNAMENTS,
    gameID
  };
};
