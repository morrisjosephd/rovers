import React from 'react'
import styled from 'styled-components'

import BaseComponent from '../layout/BaseComponent'
import colors from '../../styles/colors'

const PINK = colors.pink
const ORANGE = colors.orange
const GRAY = colors.gray
const HEADER_HEIGHT = '150px'
const NAVIGATION_WIDTH = '25%'
const BODY_WIDTH = '75%'

export default () => (
  <div>
    <BaseComponent className='header' backgroundColor={PINK} style={styles.headerPosition}>
      Header stuff here
    </BaseComponent>
    <Wrapper>
      <BaseComponent className='navigation' backgroundColor={ORANGE} style={styles.navigationPosition}>
        Navigation stuff here
      </BaseComponent>
      <BaseComponent className='body' backgroundColor={GRAY} style={styles.bodyPosition}>
        This is the Body
      </BaseComponent>
    </Wrapper>
  </div>
)

const Wrapper = styled.div`
  display: flex;
`

const styles = {
  headerPosition: {
    height: `${HEADER_HEIGHT}`,
    width: `100%`,
    marginBottom: `.5em`
  },
  navigationPosition: {
    height: `calc(100vh - ${HEADER_HEIGHT})`,
    width: `${NAVIGATION_WIDTH}`,
    marginRight: `.5em`
  },
  bodyPosition: {
    height: `calc(100vh - ${HEADER_HEIGHT})`,
    width: `${BODY_WIDTH}`
  }
}
