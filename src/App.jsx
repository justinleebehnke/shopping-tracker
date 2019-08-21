import React, { Component } from 'react'
import Configuration from './Configuration'
import ButtonAppBar from './ButtonAppBar'
import ShoppingItems from './ShoppingItems'
import Status from './Status'

class App extends Component {
  state = {
    taxRate: 6.35,
    spendLimit: 100,
    totalSpent: 49.3232
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value })

  updateFloat = (e) => {
    const value = parseFloat(e.target.value)

    if (Math.isNaN(value) || value < 0) {
      this.setState({ [e.target.name]: 0 })
    } else {
      this.setState({ [e.target.name]: value * 1 })
    }
  }

  setTotalSpent = (cost) => this.setState({ totalSpent: cost })

  render () {
    const { taxRate, spendLimit, totalSpent } = this.state

    return (
      <div className='App'>
        <ButtonAppBar />
        <Configuration
          updateFloat={this.updateFloat}
          spendLimit={spendLimit}
          taxRate={taxRate}
        />
        <Status totalSpent={totalSpent} spendLimit={spendLimit} />
        <ShoppingItems setTotalSpent={this.setTotalSpent} taxRate={taxRate} />
      </div>
    )
  }
}

export default App
