/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider } from '@material-ui/core/styles';
import Dashboard from './components/dashboard/dashboard/Dashboard.jsx';
import theme from './theming/theme.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    );
  }
}

export default hot(App);
