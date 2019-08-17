import React from 'react'
import {
  Container,
  InputAdornment,
  LinearProgress,
  TextField
} from '@material-ui/core'
import './style.css'

function Status () {
  return (
    <Container id='status'>
      <div className='input-row'>
        <TextField
          className='input'
          variant='outlined'
          label='Total Spent'
          value='100'
          readOnly='true'
          disabled='true'
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
          value='100'
          readOnly='true'
          disabled='true'
          type='number'
          onChange={() => {}}
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>
          }}
        />
      </div>
      <LinearProgress label='50' className='progress' color='secondary' variant='determinate' value={50} />
    </Container>
  )
}

export default Status
