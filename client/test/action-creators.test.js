import { expect } from 'chai'

import * as actionTypes from '../actions/action-types'
import * as authActions from '../actions/auth-actions'
import * as createTMActions from '../actions/createTM-actions'
import * as gamesActions from '../actions/games-actions'
import * as hotActions from '../actions/hot-actions'
import * as modalActions from '../actions/modal-actions'
import * as tournamentsActions from '../actions/tournaments-actions'


describe('Action Creators', () => {
  describe('Auth', () => {
    it('userSignin', () => {
      const email = 'testing@email.com'
      const password = 'password'
      const expected = {
        type: actionTypes.SIGNIN_REQUEST,
        email,
        password,
      }
      expect(authActions.userSignin(email, password)).to.deep.equal(expected)
    })
    it('userSignup', () => {
      const email = 'testing@email.com'
      const password = 'password'
      const expected = {
        type: actionTypes.SIGNUP_REQUEST,
        email,
        password,
      }
      expect(authActions.userSignup(email, password)).to.deep.equal(expected)
    })
    it('userSignout', () => {
      const expected = {
        type: actionTypes.SIGNOUT,
      }
      expect(authActions.userSignout()).to.deep.equal(expected)
    })
  })

  describe('Create TM', () => {
    it('selectGame', () => {
      const game = 'testGame'
      const expected = {
        type: actionTypes.SELECT_GAME,
        game,
      }
      expect(createTMActions.selectGame(game)).to.deep.equal(expected)
    })
  })

  describe('Game', () => {
    it('selectGame', () => {
      const gameId = 'testGame'
      const expected = {
        type: actionTypes.SELECT_GAME,
        gameId,
      }
      expect(gamesActions.selectGame(gameId)).to.deep.equal(expected)
    })
    it('fetchGames', () => {
      const expected = {
        type: actionTypes.FETCH_GAMES,
      }
      expect(gamesActions.fetchGames()).to.deep.equal(expected)
    })
    it('selectGame', () => {
      const expected = {
        type: actionTypes.FETCH_TOP_GAMES,
      }
      expect(gamesActions.fetchTopGames()).to.deep.equal(expected)
    })
  })

  describe('Hot', () => {
    it('hotSelect', () => {
      const tournament = 'faketournament'
      const expected = {
        type: actionTypes.HOT_SELECT,
        tournament,
      }
      expect(hotActions.hotSelect(tournament)).to.deep.equal(expected)
    })
    it('fetchHotTournament', () => {
      const expected = {
        type: actionTypes.HOT_TOURNAMENT_FETCH,
      }
      expect(hotActions.fetchHotTournament()).to.deep.equal(expected)
    })
  })

  // describe('Modal', () => {
  //   it('Open Modal', () => {
  //     const modal = 'modal'
  //     const expected = {
  //       type: actions.
  //     }
  //
  //   })
  // })
  //
  // describe('Tournaments', () => {
  //
  // })
})
