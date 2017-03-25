/* @flow */

import React, { Component } from 'react';
import './Controls.css';

import IO from './IO';
import Buttons from './Buttons'

class Controls extends Component {
  render() {
    return (
      <div className={'Controls'}>
        <IO />
        <Buttons />
      </div>
    );
  }
}

export default Controls;
