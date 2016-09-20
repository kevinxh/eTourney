import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import Root from '../../../client/containers/Root'
import GameList from '../../../client/containers/game-list'
import HotTournament from '../../../client/containers/hot-tournament'
import configureStore from '../../../client/store/configureStore'
import rootSaga from '../../../client/sagas'


import jsdom from 'jsdom'
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView
//
// const store = configureStore()
// store.runSaga(rootSaga)
// const history = syncHistoryWithStore(browserHistory, store.store)

import Home from '../../../client/components/home'
import { Header } from '../../../client/containers/header'

describe('<Home />', () => {
  it('should render Gamelist component', () => {
    const wrapper = mount(<Header />)
    // expect(wrapper.find(GameList)).to.have.length(1)

  })
})
