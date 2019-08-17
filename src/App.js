import React from 'react'
import {
  Card,
  CardContent,
  Container
} from '@material-ui/core'
import Configuration from './Configuration/Configuration'
import Status from './Status/Status'

function App () {
  return (
    <div className='App'>
      <Container className='container' maxWidth='sm'>
        <Configuration />
        <Status />
        <Card className='list'>
          <CardContent>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
            </ul>
          </CardContent>
        </Card>
      </Container>
    </div>
  )
}

export default App
