import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import useWindowSize from '../hooks/useWindowSize'

import { isMobile } from '../util'

// eslint-disable-next-line no-empty-pattern
const RootStyle = styled('div')(({ size }) => {
  const base = {
    fontFamily: 'ArtisanSignature',
    textAlign: 'center'
  }

  if (isMobile(size)) {
    return {
      ...base,
      h2: { fontSize: '2.5rem', marginTop: '3rem', marginBottom: '25px' },
      div: { fontSize: '1rem', marginBottom: '2px' }
    }
  }

  return {
    ...base,
    h2: { fontSize: '3rem', marginTop: '3rem', marginBottom: '25px' },
    div: { fontSize: '1.5rem', marginBottom: '2px' }
  }
})

const SubHeader = ({ title, subTitle }) => {
  const size = useWindowSize()

  return (
    <RootStyle id={title === 'Our Story' ? 'ourstory' : `${title}`} size={size}>
      <h2>{title}</h2>
      {subTitle !== undefined && <div>{subTitle}</div>}
    </RootStyle>
  )
}

SubHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
}

export default SubHeader
