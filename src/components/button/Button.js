import React from 'react'
import styled from 'styled-components'

import colors from '../../styles/colors'

export default ({ callback, id }) => {
  return (
    <DeliveredButton className='delivered-button' data-id={id} onClick={callback}>Delivered</DeliveredButton>
  )
}

const DeliveredButton = styled.button`
  padding: 8px;
  background-color: gray;
  color: ${colors.white}
`