import React from 'react'
import { shallow } from 'enzyme'

import App from './App'
import Orders from '../order/Orders'

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('renders the App compoent', () => {
    expect(wrapper.find(App)).toBeTruthy()
  })

  it('renders the header', () => {
    expect(wrapper.find('.header').text()).toEqual('Header stuff here')
  })

  it('renders the navigation', () => {
    expect(wrapper.find('.navigation').text()).toEqual('Navigation stuff here')
  })

  it('renders the body', () => {
    expect(wrapper.find('.body')).toBeTruthy()
  })

  // TODO - when firebase is placed into HOC around Orders, then test this
  xit('renders orders in the body', () => {
    expect(wrapper.find('.orders').length).toBeGreaterThan(0)
  })
})

const assertType = (wrapper, orders) => {
  for (let i = 0; i < orders; i++) {
    expect(wrapper.find('.body').childAt(i + 1).type()).toEqual(Order)
  }
}
