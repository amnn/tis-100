/* @flow */

import React, { Component } from 'react';
import './Controls.css';

import Inputs from './Inputs';
import Outputs from './Outputs';
import Buttons from './Buttons'

class Controls extends Component {
  render() {
    return (
      <div className={'Controls'}>
        <h2 className={'title'}>
          TIS-100 Emulator
        </h2>
        <div className={'inputs-part'}>
          <Inputs />
        </div>
        <div className={'outputs-part'}>
          <Outputs />
        </div>
        <div className={'buttons-part'}>
          <Buttons />
        </div>
      </div>
    );
  }
}

export default Controls;
