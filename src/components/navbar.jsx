import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
// import IconButton from '@mui/material/IconButton'
// import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import MuiAppBar from '@mui/material/AppBar'
import { styled } from '@mui/material/styles'

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open'
})(({ theme, open, drawerWidth }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  })
}))

// eslint-disable-next-line no-empty-pattern
const Logo = styled(Typography)(({}) => ({
  color: 'black !important',
  fontFamily: 'Dancing Script, cursive',
  fontSize: '1.5em'
}))

const NavBar = ({ open, drawerWidth }) => {
  return (
    <>
      <AppBar
        position="fixed"
        open={open}
        className="navbar"
        drawerWidth={drawerWidth}
      >
        <Toolbar>
          <Logo variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            M & S
          </Logo>
        </Toolbar>
      </AppBar>
    </>
  )
}

NavBar.propTypes = {
  open: PropTypes.bool,
  drawerWidth: PropTypes.number,
  handleDrawerOpen: PropTypes.func
}

export default NavBar
