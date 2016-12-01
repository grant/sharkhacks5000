import React, { Component } from 'react';
import Radium from 'radium';

@Radium
export default class Fish extends Component {
  render() {
    return (
      <li className='Fish' style={{
          position: 'absolute',
        }}>
        <img ref='img' style={{
            width: '100%',
          }} src='images/fishLarge1.png' />
      </li>
    );
  }
}
