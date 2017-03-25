/* @flow */

import React, { Component } from 'react';
import './TISButton.css';

type Props = {
  label: string,
  tooltip?: string,
};

class TISButton extends Component {
  props: Props;

  render() {
    return (
      <a href="#" className={'tis-button pane'}>
        {this.props.label}
      </a>
    );
  }
}

export default TISButton;
