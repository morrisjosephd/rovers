import React from 'react'
import styled from 'styled-components'

import Location from '../location/Location'
import Button from '../button/Button'
import colors from '../../styles/colors'

export default ({ order }) => {
  if (!order) {
    return null
  }

  return (
    <Wrapper>
      <Location location={order.origin} type={'Origin'} />
      <Location location={order.destination} type={'Destination'} />
      <Button id={order.id} callback={executeCompletionTask}/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  background-color: ${colors.white}
  margin-bottom: 8px;
`

const executeCompletionTask = (event) => {
  const id  = event.target.dataset.id

  alert(`Imagine I just called a service to mark this delivery completed with an order id : ${id}!`)
} 
