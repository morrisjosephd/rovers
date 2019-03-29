import React from 'react'
import { shallow } from 'enzyme'

import Location from './Location'

describe('Location', () => {
  let wrapper

  const fakeData = {
      name: 'Scooby Doo',
      address: '123 Mystery Machine Way',
      city: 'Springfield',
      state: 'MA'
  }

  const expectedType = 'Origin'

  beforeEach(() => {
    wrapper = shallow(<Location location={fakeData} type={expectedType} />)
  })

  it('renders the type of location', () => {
      expect(wrapper.text()).toContain(expectedType)
  })

  it('renders location data', () => {
    expect(wrapper.find('.name').text()).toEqual(`Name: ${fakeData.name}`)
    expect(wrapper.find('.address').text()).toEqual(`Address: ${fakeData.address}`)
    expect(wrapper.find('.city').text()).toEqual(`City: ${fakeData.city}`)
    expect(wrapper.find('.state').text()).toEqual(`State: ${fakeData.state}`)
  })

  it('does not blow up if location props are empty', () => {
      wrapper = shallow(<Location type={expectedType} />)

      expect(wrapper.html()).toBeNull()
  })

  it('does not blow up if type props are empty', () => {
      wrapper = shallow(<Location location={fakeData} />)

      expect(wrapper.html()).toBeNull()
  })
})
