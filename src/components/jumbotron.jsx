import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import useWindowSize from '../hooks/useWindowSize'
import { getRandomEntry, isMobile } from '../util'

const MIN_FOLD_WIDTH = 1090

// eslint-disable-next-line no-empty-pattern
const RootStyle = styled('div')(({ size }) => {
  return {
    position: 'relative',
    width: '100%',
    height: '100%',
    h1: {
      position: 'relative',
      textAlign: 'center',
      justifyContent: 'center',
      zIndex: 2,
      top: '-70%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: isMobile(size) ? '2.8rem' : '6rem',
      marginLeft: '5px',
      marginRight: '5px',
      fontFamily: 'ArtisanSignature'
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
  }
})

const shouldFoldFont = ({ width }) => width < MIN_FOLD_WIDTH

const Jumbotron = ({ pics }) => {
  const size = useWindowSize()
  const randomPic = getRandomEntry(pics)
  const [pic] = useState(randomPic)

  return (
    <RootStyle size={size}>
      <img src={pic.url} alt={pic.description} />

      {shouldFoldFont(size) ? (
        <h1>
          {' '}
          MaryAlexa <br></br>&<br></br> Silvino{' '}
        </h1>
      ) : (
        <h1> MaryAlexa & Silvino </h1>
      )}
    </RootStyle>
  )
}

Jumbotron.propTypes = {
  pics: PropTypes.array.isRequired
}

export default Jumbotron
