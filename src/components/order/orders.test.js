import React from 'react'
import { shallow } from 'enzyme'

import Orders from './Orders'
import { transformedFakeOrders } from '../../fakeData'

describe('Order component', () => {
  let wrapper

  beforeEach(() => {
    const mockFirebase = {
      getOrders: () => Promise.resolve(transformedFakeOrders)
    }

    wrapper = shallow(<Orders firebase={mockFirebase} />)
  })

  it('renders location data for origin and destination', () => {
      const locationOrigins = wrapper.find('.location-origin').get(0)
      const locationDestinations = wrapper.find('.location-destination').get(0)

      expect(locationOrigins.props.type).toEqual('Origin')
      expect(locationOrigins.props.location).toEqual(transformedFakeOrders[0].origin)
      expect(locationDestinations.props.type).toEqual('Destination')
      expect(locationDestinations.props.location).toEqual(transformedFakeOrders[0].destination)
  })

  it('renders the delivered button', () => {
    expect(wrapper.find('.delivered-button').length).toBeGreaterThan(0)
  })

  // TODO: when click handler does something real, then test it
  xit('renders the delivered button', () => {
    const clickHandler = wrapper.find('.delivered-button').get(0).props.onClick

    clickHandler(5)
  })
})
