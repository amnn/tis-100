/* @flow */

import React, { Component } from 'react';
import './TISButton.css';

import Icon from 'react-fa';

type Props = {
  label: string,
  title?: string,
  icon?: string,
};

class TISButton extends Component {
  props: Props;

  render() {
    const title = this.props.title || this.props.label;
    const icon  = this.props.icon
          ? <Icon name={this.props.icon}/>
          : null;

    return (
      <a href="#"
         className={'tis-button pane'}
         title={title}>
        {icon}
        {this.props.label}
      </a>
    );
  }
}

export default TISButton;
