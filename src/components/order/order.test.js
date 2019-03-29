import React from 'react'
import { shallow } from 'enzyme'

import Order from './Order'
import Location from '../location/Location'
import data from '../../fakeData'

describe('Order component', () => {
  const fakeData = data[0]
  let wrapper

  it('should render location data for origin and destination', () => {
    wrapper = shallow(<Order order={fakeData} />)

    expect(wrapper.children().length).toEqual(2)
    expect(wrapper.childAt(0).type()).toEqual(Location)
    expect(wrapper.childAt(1).type()).toEqual(Location)
    expect(wrapper.childAt(0).props().location).toEqual(fakeData.origin)
    expect(wrapper.childAt(1).props().location).toEqual(fakeData.destination)
  })

  it('does not blow up if order props are null', () => {
    wrapper = shallow(<Order />)

    expect(wrapper.html()).toBeNull()
  })
})
