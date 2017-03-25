/* @flow */

import React, { Component } from 'react';
import './App.css';

import Controls from './Controls';
import TIS from './TIS';

class App extends Component {
  render() {
    return (
      <div className={'App'}>
        <Controls />
        <TIS />
      </div>
    );
  }
}

export default App;
