import React from 'react'
import Configuration from './Configuration/Configuration'
import AddIcon from '@material-ui/icons/Add'
import ButtonAppBar from './ButtonAppBar/ButtonAppBar'
import Fab from '@material-ui/core/Fab'
import './App.css'

import ShoppingItems from './ShoppingItems/ShoppingItems'
import Status from './Status/Status'

function App () {
  return (
    <div className='App'>
      <ButtonAppBar />
      <Configuration />
      <Status />
      <ShoppingItems />
      <Fab color='primary' aria-label='add' id='fab'>
        <AddIcon />
      </Fab>
    </div>
  )
}

export default App
