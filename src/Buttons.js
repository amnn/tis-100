/* @flow */

import React, { Component } from 'react';
import './Buttons.css';

import TISButton from './TISButton';

class Buttons extends Component {
  render() {
    return (
      <div className={'Buttons'}>
        <TISButton label="Stop" icon="stop"/>
        <TISButton label="Bck"  icon="step-backward" title="Step Backward"/>
        <TISButton label="Run"  icon="play"/>
        <TISButton label="Fwd"  icon="step-forward"  title="Step Forward"/>
        <TISButton label="FFwd" icon="fast-forward"  title="Fast Forward"/>
      </div>
    );
  }
}

export default Buttons;
