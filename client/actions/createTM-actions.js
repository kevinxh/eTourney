import * as actionTypes from './action-types'

export const selectGame = (game) => {
  return {
    type: actionTypes.SELECT_GAME,
    game,
  }
}
