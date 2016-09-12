import * as actionTypes from './action-types'

export const selectGame = (game) => {
  console.log('selectGame')
  return {
    type: actionTypes.SELECT_GAME,
    game,
  }
}
