import chai, { expect } from 'chai'
import spies from 'chai-spies'
import React from 'react'
import { shallow, mount } from 'enzyme'

chai.use(spies)

import GameListItem from '../components/game-list/game-list-item'

function setup() {
  const props = {
    game: {
      _id: 1
    }
  }

  const enzymeWrapper = shallow(<GameListItem {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('Components', () => {
  describe('GameListItem', () => {
    it('Div should have game-list-item class', () => {
      const { enzymeWrapper } = setup()
      expect(enzymeWrapper.find('div').hasClass('game-list-item')).to.equal(true)
    })
    it('Should have link to game', () => {
      const { enzymeWrapper } = setup()
      const LinkProps = enzymeWrapper.find('Link').props()
      expect(LinkProps.to).to.equal('/find/1')
    })
  })
})
