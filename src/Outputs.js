/* @flow */

import React, { Component } from 'react';
import './Outputs.css';

import Output from './Output';

class Outputs extends Component {
  render() {
    return (
      <div className={'Outputs'}>
        {Array.from({length: 4}, () => <Output />)}
      </div>
    );
  }
}

export default Outputs;
