import * as actionTypes from './action-types';

export function selectMainpageTournament(game){
  console.log('the game is ', game.game);
  return {
    type: actionTypes.FAV_TM_SELECT,
    value: game,

  };

}
