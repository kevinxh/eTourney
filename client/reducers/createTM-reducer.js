import { SELECT_GAME, SELECT_STATE, SELECT_TABNOTCOMPLETED } from '../actions/action-types';
import { combineReducers } from 'redux';




const SelectedGame = function (state = null, action) {
  switch (action.type) {
    case SELECT_GAME:
        return { ...state, game: action.game};
  }
  return state;
}

const SelectedTab = function (state = 1, action){
  switch (action.type){
    case SELECT_STATE:
      return { ...state, state: action.tab, disable: true};
    case SELECT_TABNOTCOMPLETED:
      return { ...state, disable: false}
  }
  return state;
}

const CreateTM = combineReducers({
  SelectedGame,
  SelectedTab,
});

export default CreateTM;
