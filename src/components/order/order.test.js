import React from 'react'
import { shallow } from 'enzyme'

import Order from './Order'
import Location from '../location/Location'
import Button from '../button/Button'
import data from '../../fakeData'

describe('Order component', () => {
  const fakeData = data[0]
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Order order={fakeData} />)
  })

  it('renders location data for origin and destination', () => {
    expect(wrapper.childAt(0).type()).toEqual(Location)
    expect(wrapper.childAt(1).type()).toEqual(Location)
    expect(wrapper.childAt(0).props().location).toEqual(fakeData.origin)
    expect(wrapper.childAt(1).props().location).toEqual(fakeData.destination)
  })

  it('renders the delivered button', () => {
    expect(wrapper.childAt(2).type()).toEqual(Button)
  })

  it('does not blow up if order props are null', () => {
    wrapper = shallow(<Order />)

    expect(wrapper.html()).toBeNull()
  })
})
