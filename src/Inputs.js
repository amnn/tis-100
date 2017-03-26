/* @flow */

import React, { Component } from 'react';
import './Inputs.css';

import Input from './Input';

class Inputs extends Component {
  render() {
    return (
      <div className={'Inputs'}>
        {Array.from({length: 4}, () => <Input />)}
      </div>
    );
  }
}

export default Inputs;
