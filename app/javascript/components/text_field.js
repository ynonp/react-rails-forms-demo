import React from 'react';
import { formContext } from './form';

export default class TextField extends React.Component {
  static contextType = formContext;
  render() {
    const prefix = this.context.for;

    return <input type="text" name={`${prefix}[${this.props.name}]`} />
  }
}

