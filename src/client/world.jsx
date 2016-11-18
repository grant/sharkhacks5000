import React, { Component } from 'react';
import Radium from 'radium';

@Radium
export default class World extends Component {
  render() {
    return (
      <div style={{
        color: 'blue'
      }}>
        world
      </div>
    );
  }
}