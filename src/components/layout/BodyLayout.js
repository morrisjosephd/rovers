import React from 'react'

import colors from '../../styles/colors'

const styles = {
  backgroundColor: `${colors.gray}`,
  padding: `.5em`
}

export default ({ bodyPosition, children }) => (
  <div className='body' style={{ ...bodyPosition, ...styles }}>
    {children}
  </div>
)
