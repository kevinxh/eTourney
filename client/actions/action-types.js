// This file declares all the action types.


// Modal Actions
export const MODAL_OPEN = 'MODAL_OPEN'
export const MODAL_CLOSE = 'MODAL_CLOSE'

// Authentication Actions
export const SIGNIN_REQUEST = 'SIGNIN_REQUEST'
export const SIGNIN_WAITING = 'SIGNIN_WAITING'
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS'
export const SIGNIN_ERROR = 'SIGNIN_ERROR'

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST'
export const SIGNUP_WAITING = 'SIGNUP_WAITING'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_ERROR = 'SIGNUP_ERROR'

export const SIGNOUT = 'SIGNOUT'

// Games Actions
export const SELECT_GAME = 'SELECT_GAME'
export const SELECT_GAME_SUCCESS = 'SELECT_GAME_SUCCESS'
export const FETCH_GAMES = 'FETCH_GAMES'
export const FETCH_TOP_GAMES = 'FETCH_TOP_GAMES'
export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS'

// HotTournament
export const HOT_SELECT = 'HOT_SELECT'
export const HOT_TOURNAMENT_FETCH = 'HOT_TOURNAMENT_FETCH'
export const FETCH_HOTTOURNAMENT_SUCCESS = 'FETCH_HOTTOURNAMENT_SUCCESS'

// Tournament Actions
export const FETCH_TOURNAMENTS = 'FETCH_TOURNAMENTS'
export const FETCH_TOURNAMENTS_SUCCESS = 'FETCH_TOURNAMENTS_SUCCESS'
