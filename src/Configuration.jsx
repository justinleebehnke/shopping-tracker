import React from 'react'
import PropTypes from 'prop-types'
import { Container, InputAdornment, TextField } from '@material-ui/core'

function Configuration ({ taxRate, spendLimit, updateFloat }) {
  return (
    <Container id='configuration'>
      <div className='input-row'>
        <TextField
          className='input'
          variant='outlined'
          name='taxRate'
          label='Sales Tax Rate'
          value={Number(taxRate).toString()}
          type='number'
          onChange={updateFloat}
          InputProps={{
            endAdornment: <InputAdornment position='end'>%</InputAdornment>
          }}
        />
        <TextField
          className='input'
          variant='outlined'
          name='spendLimit'
          label='Spend Limit'
          value={Number(spendLimit).toString()}
          type='number'
          onChange={updateFloat}
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

Configuration.propTypes = {
  taxRate: PropTypes.number.isRequired,
  spendLimit: PropTypes.number.isRequired,
  updateFloat: PropTypes.func.isRequired
}

export default Configuration
