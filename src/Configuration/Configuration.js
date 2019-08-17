import React, { Component } from 'react'
import {
  Container,
  InputAdornment,
  TextField
} from '@material-ui/core'
import './style.css'

class Configuration extends Component {
  render () {
    return (
      <Container id='configuration'>
        <div className='input-row'>
          <TextField
            className='input'
            variant='outlined'
            label='Tax Rate'
            value='100'
            type='number'
            onChange={() => {}}
            InputProps={{
              endAdornment: <InputAdornment position='end'>%</InputAdornment>
            }}
          />
          <TextField
            className='input'
            variant='outlined'
            label='Spend Limit'
            value='100'
            type='number'
            onChange={() => {}}
            InputProps={{
              startAdornment: <InputAdornment position='start'>$</InputAdornment>
            }}
          />
        </div>
      </Container>
    )
  }
}

export default Configuration
