import React from 'react'
import styled from 'styled-components'

import BaseComponent from '../layout/BaseComponent'
import { FirebaseContext } from '../Firebase'
import Orders from '../order/Orders'
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
        <FirebaseContext.Consumer>
          {firebase => (
            <Orders firebase={firebase} />
          )}
        </FirebaseContext.Consumer>
      </BaseComponent>
    </Wrapper>
  </div>
)

const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - ${HEADER_HEIGHT} - .5em - 1em);
`

const styles = {
  headerPosition: {
    height: `${HEADER_HEIGHT}`,
    marginBottom: `.5em`
  },
  navigationPosition: {
    width: `${NAVIGATION_WIDTH}`,
    marginRight: `.5em`,
    borderRadius: `0 3px 0 0`
  },
  bodyPosition: {
    width: `${BODY_WIDTH}`,
    borderRadius: `3px 0 0 0`
  }
}
