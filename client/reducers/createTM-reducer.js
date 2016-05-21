import { SELECT_GAME, SELECT_TAB, TOGGLE_TAB } from '../actions/action-types';
import { UNSELECTED } from '../constants/games';
import { combineReducers } from 'redux';

const initialTournamentInfo = {
  game: UNSELECTED,
}

// TournamentInfo store all data gathered from user during
// tournament creation.
const TournamentInfo = (state = initialTournamentInfo, action) => {
  switch (action.type) {
    case SELECT_GAME:
        return { ...state, game: action.game};
  }
  return state;
}

const initialTabState = {
  SelectedTab: 1,
  isDisabled: {
    1: false,
    2: true,
    3: true,
  }
}

// TabState controls the activeKey and disable state
// for create tournament wizard, the initial value
// for SelectedTab must be 1, as the first tab shows up first.
const TabState = function (state = initialTabState, action){
  switch (action.type){
    case SELECT_TAB:
      if (state.isDisabled[action.tab]){
        return state;
      }
      return { ...state, SelectedTab: action.tab};
    case TOGGLE_TAB:
      let newIsDisabled = state.isDisabled;
      newIsDisabled[action.tab] = action.disabled;
      return { ...state, isDisabled: newIsDisabled};
  }
  return state;
}

const CreateTM = combineReducers({
  TournamentInfo,
  TabState,
});

export default CreateTM;
