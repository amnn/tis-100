/* @flow */

import React, { Component } from 'react';
import './Buttons.css';

import TISButton from './TISButton.js';

class Buttons extends Component {
  render() {
    return (
      <div className={'Buttons'}>
        <TISButton label="Stop"/>
        <TISButton label="Back"/>
        <TISButton label="Play"/>
        <TISButton label="Fwd"/>
        <TISButton label="F-Fwd"/>
      </div>
    );
  }
}

export default Buttons;
