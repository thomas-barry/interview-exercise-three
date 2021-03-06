import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Box } from '@material-ui/core';

import Instructions from './Instructions';
import Counter from './Counter'

import './styles.css';

export default function App() {
  return (
    <MuiThemeProvider>
      <div className="app">
        <Instructions />
        <Box px={2}>
          <Counter initialValue={12} />
        </Box>
      </div>
    </MuiThemeProvider>
  );
}
