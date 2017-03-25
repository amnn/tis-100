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
          ? <Icon name={this.props.icon} size={'2x'} className={'icon'}/>
          : null;
    const label = (<span>{this.props.label}</span>);

    return (
      <a href="#"
         className={'TISButton pane'}
         title={title}>
        {icon}
        {label}
      </a>
    );
  }
}

export default TISButton;
