import React from 'react'
import { Provider } from 'react-redux'
import { shallow, mount } from 'enzyme'


import configureStore from './helpers/store'
import Header from '../containers/header'
import GameList from '../containers/game-list'

describe('Containers', () => {
  // describe('Header', () => {
  //   it('test', () => {
  //     const headerWrapper = mount(<Provider store={configureStore()}><Header /></Provider>)
  //   })
  // })
  describe('Game List', () => {
    it('test', () => {
      const gameListWrapper = mount(
        <Provider store={configureStore()}>
          <GameList games={[]} />
        </Provider>
      )
      console.log(gameListWrapper.props())
    })
  })
})
