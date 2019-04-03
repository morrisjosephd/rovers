import React from 'react'
import { shallow } from 'enzyme'

import Button from './Button'

describe('Delivered button', () => {
  const spy = jest.fn()
  const expectedId = 1

  it('invokes the injected callback when the button is clicked', () => {
    const wrapper = shallow(<Button onClick={spy} id={expectedId} />)
    expect(spy).toHaveBeenCalledTimes(0)

    wrapper.simulate('click')

    expect(spy).toHaveBeenCalledTimes(1)
  })
})
