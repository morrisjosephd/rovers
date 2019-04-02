import React from 'react'
import styled from 'styled-components'

import colors from '../../styles/colors'

export default ({ id, onClick }) => {
  return (
    <DeliveredButton className='delivered-button' data-id={id} onClick={onClick}>Delivered</DeliveredButton>
  )
}

const DeliveredButton = styled.button`
  width: 100px;
  height: 50px;
  margin: 8px;
  border-radius: 3px;
  font-size: 0.75em;
  padding: 8px;
  background-color: ${colors.darkGray};
  color: ${colors.white};
  &:focus {
    outline: 0;
  }
  &:hover {
    cursor: pointer;
    background-color: ${colors.lightGray};
  }
`