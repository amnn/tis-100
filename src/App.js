/* @flow */

import React, { Component } from 'react';
import './App.css';

import Controls from './Controls';
import TIS from './TIS';

class App extends Component {
  render() {
    return (
      <div className={'App'}>
        <div className={'controls-part'}>
          <Controls />
        </div>
        <div className={'tis-part'}>
          <TIS />
        </div>
      </div>
    );
  }
}

export default App;
