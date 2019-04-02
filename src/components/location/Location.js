import React from 'react'
import styled from 'styled-components'

export default ({ location, type }) => {
  if (!location || !type) {
    return null
  }

  return (
    <LocationWrapper>
      {type}
      <OrderDetail className='name'>{location.name}</OrderDetail>
      <OrderDetail className='address'>{location.address}</OrderDetail>
      <OrderDetail className='city-state'>{location.city}, {location.state}</OrderDetail>
    </LocationWrapper>
  )
}

const OrderDetail = styled.div`
    font-weight: 300;
`

const LocationWrapper = styled.div`
    padding: 8px;
    margin: 8px;
    width: 200px;
`
