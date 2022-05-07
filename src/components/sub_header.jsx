import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'

// eslint-disable-next-line no-empty-pattern
const RootStyle = styled('div')(({}) => ({
  fontFamily: 'Dancing Script, cursive',
  fontSize: '2rem',
  textAlign: 'center',
  marginTop: '3rem'
}))

const SubHeader = ({ title }) => (
  <RootStyle id={title === 'Our Story' ? 'ourstory' : `${title}`}>
    <h2>{title}</h2>
  </RootStyle>
)

SubHeader.propTypes = {
  title: PropTypes.string
}

export default SubHeader
