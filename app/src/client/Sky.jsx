import React, { Component } from 'react';
import Radium from 'radium';
import Constants from './constants';

@Radium
export default class Sky extends Component {
  render() {
    const moonSize = 240;
    return (
      <div className='Sky' style={{
        height: '400px',
        position: 'relative',
        backgroundColor: Constants.color.green
      }}>
        <div className="moon" style={{
          width: `${moonSize}px`,
          height: `${moonSize}px`,
          margin: `0 calc(50% - ${moonSize/2}px)`,
          position: 'absolute',
          bottom: '0',
          backgroundColor: Constants.color.gray
        }}>moon
        </div>
      </div>
    );
  }
}
