/* @flow */

import React, { Component } from 'react';
import './Buttons.css';

import TISButton from './TISButton.js';

class Buttons extends Component {
  render() {
    return (
      <div className={'Buttons'}>
        <TISButton label="Stop"/>
        <TISButton label="Back" title="Step Backward"/>
        <TISButton label="Play"/>
        <TISButton label="Fwd" title="Step Forward"/>
        <TISButton label="F-Fwd" title="Fast Forward"/>
      </div>
    );
  }
}

export default Buttons;
