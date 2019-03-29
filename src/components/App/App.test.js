import React from 'react'
import { shallow } from 'enzyme'

import App from './App'
import Order from '../order/Order'
import data from '../../fakeData'

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App data={data} />)
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

  it('renders orders in the body', () => {
    expect(wrapper.find('.body').children().length).toEqual(data.length + 1)
    assertType(wrapper, data.length)
  })
})

const assertType = (wrapper, orders) => {
  for (let i = 0; i < orders; i++) {
    expect(wrapper.find('.body').childAt(i + 1).type()).toEqual(Order)
  }
}
