import React from 'react'

import colors from '../../styles/colors'

const styles = {
  backgroundColor: `${colors.orange}`,
  padding: `.5em`
}

export default ({ navigationPosition, children }) => (
  <div className='navigation' style={{ ...navigationPosition, ...styles }}>
    {children}
  </div>
)
