import React from 'react'

import colors from '../../styles/colors'

const styles = {
  backgroundColor: `${colors.pink}`,
  padding: `.5em`,
}

export default ({ headerPosition, children }) => (
  <div className='header' style={{ ...headerPosition, ...styles }}>
    {children}
  </div>
)
