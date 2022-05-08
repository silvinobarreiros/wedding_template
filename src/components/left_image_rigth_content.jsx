/* eslint-disable no-empty-pattern */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import { getRandomEntry, isMobile } from '../util'
import useWindowSize from '../hooks/useWindowSize'
import {
  MOBILE_IMAGE_HEIGHT,
  DESKTOP_MARGIN,
  DESKTOP_IMAGE_HEIGHT,
  MOBILE_MARGIN
} from '../config'

const RootStyle = styled('div')(({ size }) => {
  const base = {
    display: 'flex',
    flexDirection: 'row'
  }

  if (isMobile(size)) {
    return {
      ...base,
      flexWrap: 'wrap',
      marginLeft: `${MOBILE_MARGIN}rem`,
      marginRight: `${MOBILE_MARGIN}rem`
    }
  }

  return {
    ...base,
    marginLeft: `${DESKTOP_MARGIN}rem`,
    marginRight: `${DESKTOP_MARGIN}rem`
  }
})

const Photo = styled('div')(({ size }) => {
  const base = { opacity: '0.6', boxShadow: '60px -16px #fff5ee' }

  if (isMobile(size)) {
    return {
      img: {
        ...base,
        marginLeft: `${MOBILE_MARGIN}rem`,
        height: MOBILE_IMAGE_HEIGHT
      }
    }
  }

  return {
    img: {
      ...base,
      height: DESKTOP_IMAGE_HEIGHT
    }
  }
})

const Content = styled('div')(({ size }) => {
  if (isMobile(size)) {
    return {
      marginRight: `${MOBILE_MARGIN}rem`,
      marginLeft: `${MOBILE_MARGIN}rem`,
      marginBottom: `${MOBILE_MARGIN / 2}rem`
    }
  }

  return {
    marginLeft: `${DESKTOP_MARGIN / 2}rem`
  }
})

const RightContent = ({ pics, children }) => {
  const size = useWindowSize()
  const randomPic = getRandomEntry(pics)
  const [pic] = useState(randomPic)

  return (
    <RootStyle size={size}>
      <Photo size={size}>
        <img src={pic.url} alt={pic.description} />
      </Photo>

      <Content size={size}>{children}</Content>
    </RootStyle>
  )
}

RightContent.propTypes = {
  pics: PropTypes.array.isRequired,
  children: PropTypes.children
}

export default RightContent
