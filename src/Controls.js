/* @flow */

import React, { Component } from 'react';
import './Controls.js';

import IO from './IO.js';
import Buttons from './Buttons.js'

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
