import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import SimpleMenu from './SimpleMenu'

function ButtonAppBar () {
  return (
    <AppBar position='static' id='app-bar'>
      <Toolbar id='tool-bar'>
        <SimpleMenu />
      </Toolbar>
    </AppBar>
  )
}

export default ButtonAppBar
