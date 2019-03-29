import React from 'react'
import styled from 'styled-components'

import Location from '../location/Location'

export default ({ order }) => {
  if (!order) {
    return null
  }
  
  return (
    <Wrapper>
      <Location location={order.origin} type={'Origin'}/>
      <Location location={order.destination} type={'Destination'}/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
`