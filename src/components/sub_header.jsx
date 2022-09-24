import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'

// eslint-disable-next-line no-empty-pattern
const RootStyle = styled('div')(({}) => ({
  fontFamily: 'ArtisanSignature',
  textAlign: 'center',
  h2: { fontSize: '3rem', marginTop: '3rem', marginBottom: '25px' },
  div: { fontSize: '1.5rem', marginBottom: '2px' }
}))

const SubHeader = ({ title, subTitle }) => (
  <RootStyle id={title === 'Our Story' ? 'ourstory' : `${title}`}>
    <h2>{title}</h2>
    {subTitle !== undefined && <div>{subTitle}</div>}
  </RootStyle>
)

SubHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
}

export default SubHeader
