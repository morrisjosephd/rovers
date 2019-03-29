import React from 'react'
import { shallow } from 'enzyme'

import Button from './Button'

describe('Delivered button', () => {
  const spy = jest.fn()
  const expectedId = 1

  it('invokes the injected callback when the button is clicked', () => {
    const wrapper = shallow(<Button callback={spy} id={expectedId}/>)
    expect(spy).toHaveBeenCalledTimes(0);
    
    wrapper.find('.delivered-button').simulate('click')

    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledTimes(1);
  })
})