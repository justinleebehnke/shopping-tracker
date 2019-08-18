import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, InputAdornment, TextField } from '@material-ui/core'
import './style.css'

class Configuration extends Component {
  render() {
    const { taxRate, spendLimit, onChange } = this.props

    return (
      <Container id='configuration'>
        <div className='input-row'>
          <TextField
            className='input'
            variant='outlined'
            name='taxRate'
            label='Sales Tax Rate'
            value={taxRate}
            type='number'
            onChange={onChange}
            InputProps={{
              endAdornment: <InputAdornment position='end'>%</InputAdornment>
            }}
          />
          <TextField
            className='input'
            variant='outlined'
            name='spendLimit'
            label='Spend Limit'
            value={spendLimit}
            type='number'
            onChange={onChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>$</InputAdornment>
              )
            }}
          />
        </div>
      </Container>
    )
  }
}

Configuration.propTypes = {
  taxRate: PropTypes.number.isRequired,
  spendLimit: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Configuration
