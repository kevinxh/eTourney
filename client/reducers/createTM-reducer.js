import { SELECT_GAME } from '../actions/action-types';

export default function (state = null, action) {
  switch (action.type) {
    case SELECT_GAME:
        return { ...state, game: action.game};
  }
  return state;
}
