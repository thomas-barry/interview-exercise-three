import React, { useState } from 'react'
import { Box } from '@material-ui/core'
import { Button } from '@material-ui/core' 
import { ButtonGroup } from '@material-ui/core'

const Counter = ({ initialValue = 0, maxValue = 20 }) => {
  const [value, setValue] = useState(initialValue)

  const increment = () => setValue(Math.min(maxValue, value + 1))

  const decrement = () => setValue(Math.max(initialValue, value - 1))

  const reset = () => setValue(initialValue)

  return (
    <React.Fragment>
      <Box pb={3}>{value}</Box>
      <ButtonGroup>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={increment}>
          Increment
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={decrement}>
          Decrement          
        </Button>
        <Button 
          variant="contained" 
          color="default" 
          onClick={reset}>
          Reset
        </Button>
      </ButtonGroup>
    </React.Fragment>
  )
}

export default Counter