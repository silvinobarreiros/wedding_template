import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'

import { getRandomEntry } from '../util'

// eslint-disable-next-line no-empty-pattern
const RootStyle = styled('div')(({}) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  h1: {
    position: 'relative',
    textAlign: 'center',
    justifyContent: 'center',
    zIndex: 2,
    top: '-60%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '6rem',
    fontFamily: 'Dancing Script, cursive'
  },
  h2: {
    position: 'relative',
    textAlign: 'center',
    justifyContent: 'center',
    zIndex: 2,
    top: '-70%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '2rem',
    fontFamily: 'Dancing Script, cursive'
  },
  img: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    position: 'relative',
    top: 0,
    left: 0,
    zIndex: 1,
    opacity: 0.4
  }
}))

const Jumbotron = ({ pics }) => {
  const randomPic = getRandomEntry(pics)
  const [pic] = useState(randomPic)

  return (
    <RootStyle>
      <img src={pic.url} alt={pic.description} />
      <h1> MaryAlexa & Silvino </h1>
      <h2> 10.08.2022 </h2>
    </RootStyle>
  )
}

Jumbotron.propTypes = {
  pics: PropTypes.array.isRequired
}

export default Jumbotron
