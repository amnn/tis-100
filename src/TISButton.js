/* @flow */

import React, { Component } from 'react';
import './TISButton.css';

type Props = {
  label: string,
  title?: string,
};

class TISButton extends Component {
  props: Props;

  render() {
    const title = this.props.title || this.props.label;

    return (
      <a href="#"
         className={'tis-button pane'}
         title={title}>
        {this.props.label}
      </a>
    );
  }
}

export default TISButton;
