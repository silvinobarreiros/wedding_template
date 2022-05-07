/* eslint-disable no-empty-pattern */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import { getRandomEntry } from '../util'

const RootStyle = styled('div')(({}) => ({
  display: 'flex',
  flexDirection: 'row',
  marginLeft: '8rem',
  marginRight: '8rem'
}))

const Photo = styled('div')(({}) => ({
  img: {
    height: '400px',
    opacity: '0.6',
    boxShadow: '60px -16px #fff5ee'
  }
}))

const Content = styled('div')(({}) => ({
  marginLeft: '4rem'
}))

const RightContent = ({ pics, children }) => {
  const randomPic = getRandomEntry(pics)
  const [pic] = useState(randomPic)

  return (
    <RootStyle>
      <Photo>
        <img src={pic.url} alt={pic.description} />
      </Photo>

      <Content>{children}</Content>
    </RootStyle>
  )
}

RightContent.propTypes = {
  pics: PropTypes.array.isRequired,
  children: PropTypes.children
}

export default RightContent
