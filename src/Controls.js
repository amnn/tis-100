/* @flow */

import React, { Component } from 'react';
import './Controls.css';

import IO from './IO';
import Buttons from './Buttons'

class Controls extends Component {
  render() {
    return (
      <div className={'Controls'}>
        <div className={'io-part'}>
          <IO />
        </div>
        <div className={'buttons-part'}>
          <Buttons />
        </div>
      </div>
    );
  }
}

export default Controls;
