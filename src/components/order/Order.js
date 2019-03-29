import React from 'react'
import styled from 'styled-components'

import Location from '../location/Location'
import colors from '../../styles/colors'

export default ({ order }) => {
  if (!order) {
    return null
  }

  return (
    <Wrapper>
      <Location location={order.origin} type={'Origin'} />
      <Location location={order.destination} type={'Destination'} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  background-color: ${colors.white}
  margin-bottom: 8px;
`
