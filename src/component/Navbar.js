import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import IconButton from '@mui/material/IconButton'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ p: 1 }}>
        <Toolbar variant="dense">
          <IconButton color="inherit" size="small" sx={{ pt: 0, mr: 1 }}>
            <LiveTvIcon />
          </IconButton>
          <Typography variant="h5" color="inherit" component="div">
            Movie info
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
