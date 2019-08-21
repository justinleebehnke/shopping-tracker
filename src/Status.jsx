import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  InputAdornment,
  LinearProgress,
  TextField
} from '@material-ui/core'

function Status ({ spendLimit, totalSpent }) {
  const percentSpent = (totalSpent / spendLimit) * 100

  return (
    <Container id='status'>
      <div className='input-row'>
        <TextField
          className='input'
          variant='outlined'
          label='Total Spent'
          value={Number.parseFloat(totalSpent).toFixed(2)}
          readOnly
          disabled
          type='number'
          onChange={() => {}}
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>
          }}
        />
        <TextField
          className='input'
          variant='outlined'
          label='Remaining'
          value={Number.parseFloat(spendLimit - totalSpent).toFixed(2)}
          readOnly
          disabled
          type='number'
          onChange={() => {}}
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>
          }}
        />
      </div>
      <LinearProgress
        className='progress'
        color={percentSpent > 100 ? 'secondary' : 'primary'}
        variant='determinate'
        value={percentSpent > 100 ? 100 : percentSpent}
      />
    </Container>
  )
}

Status.propTypes = {
  spendLimit: PropTypes.number.isRequired,
  totalSpent: PropTypes.number.isRequired
}

export default Status
