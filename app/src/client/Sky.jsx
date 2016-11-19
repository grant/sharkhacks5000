import React, { Component } from 'react';
import Radium from 'radium';
import Constants from './constants';

@Radium
export default class Sky extends Component {
  render() {
    return (
      <div className='Sky' style={{
        height: '400px',
        backgroundColor: Constants.color.green
      }}>
        <div className="moon">moon</div>
      </div>
    );
  }
}
