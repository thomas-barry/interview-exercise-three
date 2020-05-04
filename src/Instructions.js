import React from 'react';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    background: '#fff7e2',
  },
});

const Instructions = () => {
  const classes = useStyles()
  return (
    <Box px={2}>
      <Box py={4}>
        <Card className={classes.root} raised={true}>
          <CardContent>
            <Typography align="left">
              Create unit tests for the Counter component using @testing-library/react or enzyme (@testing-library is preferred).
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
};

export default Instructions;
