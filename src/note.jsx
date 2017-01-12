import React, { Component } from 'react';
import Radium from 'radium';
import Button from './button.jsx';

@Radium
export default class Note extends Component {
  render() {
    return (
      <div>Notes
      	<Button />
      </div>
    );
  }
}
