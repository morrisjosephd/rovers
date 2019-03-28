import React from 'react'
import styled from 'styled-components'

import Header from '../layout/HeaderLayout'
import Navigation from '../layout/NavigationLayout'
import Body from '../layout/BodyLayout'

const HEADER_HEIGHT = '150px'
const NAVIGATION_WIDTH = '25%'
const BODY_WIDTH = '75%'

export default () => (
  <div>
    <Header headerPosition={styles.header}>Header stuff here</Header>
    <Wrapper>
      <Navigation navigationPosition={styles.navigation}>Navigation stuff here</Navigation>
      <Body bodyPosition={styles.body}>
        This is the Body
      </Body>
    </Wrapper>
  </div>
)

const Wrapper = styled.div`
  display: flex;
`

const styles = {
  header: {
    height: `${HEADER_HEIGHT}`,
    width: `100%`,
    marginBottom: `.5em`
  },
  navigation: {
    height: `calc(100vh - ${HEADER_HEIGHT})`,
    width: `${NAVIGATION_WIDTH}`,
    marginRight: `.5em`
  },
  body: {
    height: `calc(100vh - ${HEADER_HEIGHT})`,
    width: `${BODY_WIDTH}`
  }
}
