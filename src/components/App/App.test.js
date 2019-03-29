import React from 'react'
import { shallow } from 'enzyme'

import App from './App'

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
    expect(wrapper.find('.body').text()).toContain('This is the Body')
  })
})
