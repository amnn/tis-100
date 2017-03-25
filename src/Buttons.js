/* @flow */

import React, { Component } from 'react';
import './Buttons.css';

import TISButton from './TISButton';

class Buttons extends Component {
  render() {
    return (
      <div className={'Buttons'}>
        <TISButton label="Stop"  icon="stop"/>
        <TISButton label="Back"  icon="step-backward" title="Step Backward"/>
        <TISButton label="Play"  icon="play"/>
        <TISButton label="Fwd"   icon="step-forward"  title="Step Forward"/>
        <TISButton label="F-Fwd" icon="fast-forward"  title="Fast Forward"/>
      </div>
    );
  }
}

export default Buttons;
