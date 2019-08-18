import React, { Component } from 'react'
import Configuration from './Configuration/Configuration'
import AddIcon from '@material-ui/icons/Add'
import ButtonAppBar from './ButtonAppBar/ButtonAppBar'
import Fab from '@material-ui/core/Fab'
import './App.css'
import ShoppingItems from './ShoppingItems/ShoppingItems'
import Status from './Status/Status'

class App extends Component {
  state = {
    taxRate: 6.35,
    spendLimit: 100,
    totalSpent: 49.3232
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { taxRate, spendLimit, totalSpent } = this.state
    return (
      <div className='App'>
        <ButtonAppBar />
        <Configuration
          onChange={this.onChange}
          spendLimit={spendLimit}
          taxRate={taxRate}
        />
        <Status totalSpent={totalSpent} spendLimit={spendLimit} />
        <ShoppingItems />
        <Fab color='primary' aria-label='add' id='fab'>
          <AddIcon />
        </Fab>
      </div>
    )
  }
}

export default App
