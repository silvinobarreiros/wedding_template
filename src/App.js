import React from 'react'
import './App.css'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import DrawerMenu from './components/drawer'
import MainContent from './components/main_content'

function App() {
  const drawerWidth = 240
  const [open, setOpen] = React.useState(false)

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ display: 'flex' }} id="parent">
      <CssBaseline />
      <MainContent drawerWidth={drawerWidth} open={open} />
      <DrawerMenu
        drawerWidth={drawerWidth}
        handleDrawerClose={handleDrawerClose}
        open={open}
      />
    </Box>
  )
}

export default App
