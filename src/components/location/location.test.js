import React from 'react'
import { shallow } from 'enzyme'

import Location from './Location'
import data from '../../fakeData'

describe('Location', () => {
  let wrapper

  const fakeData = data[0].origin

  const expectedType = 'Origin'

  beforeEach(() => {
    wrapper = shallow(<Location location={fakeData} type={expectedType} />)
  })

  it('renders the type of location', () => {
    expect(wrapper.text()).toContain(expectedType)
  })

  it('renders location data', () => {
    expect(wrapper.find('.name').text()).toEqual(`${fakeData.name}`)
    expect(wrapper.find('.address').text()).toEqual(`${fakeData.address}`)
    expect(wrapper.find('.city-state').text()).toEqual(`${fakeData.city}, ${fakeData.state}`)
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
