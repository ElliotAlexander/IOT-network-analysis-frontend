import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import LoginPagev2 from './components/login-page-v2';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <LoginPagev2 />;
  }
}

export default hot(App);
