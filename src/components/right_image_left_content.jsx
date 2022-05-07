import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import { getRandomEntry } from '../util'
import useWindowSize from '../hooks/useWindowSize'

const RootStyle = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  marginLeft: '8rem',
  marginRight: '8rem'
}))

const Photo = styled('div')(({ size }) => {
  const { width } = size

  const imgWidth = width >= 1000 ? '400px' : '200px'

  return {
    img: {
      height: imgWidth,
      opacity: '0.6',
      boxShadow: '60px -16px #fff5ee'
    }
  }
})

const Content = styled('div')(() => ({
  marginRight: '4rem'
}))

const LeftContent = ({ pics, children }) => {
  const size = useWindowSize()
  const randomPic = getRandomEntry(pics)
  const [pic] = useState(randomPic)

  return (
    <RootStyle>
      <Content>{children}</Content>
      <Photo size={size}>
        <img src={pic.url} alt={pic.description} />
      </Photo>
    </RootStyle>
  )
}

LeftContent.propTypes = {
  pics: PropTypes.array,
  children: PropTypes.children
}

export default LeftContent
