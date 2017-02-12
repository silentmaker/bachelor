import React, { Component } from 'react';
import 'whatwg-fetch';

import './App.css';
import logo from './images/logo.svg';

class App extends Component {
  componentDidMount() {
    console.log('loaded');
  }
  handleClick() {
    console.log('here');
  }
  render() {
    return (
      <div className="App center">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div onClick={this.handleClick}>clicks me!</div>
      </div>
    );
  }
}

export default App;