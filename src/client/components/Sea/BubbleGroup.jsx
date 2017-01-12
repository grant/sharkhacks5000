import React, { Component } from 'react';
import Radium from 'radium';
import raf from 'raf';

@Radium
export default class BubbleGroup extends Component {
  render() {
    return (
      <div className='BubbleGroup' ref='BubbleGroup' style={{
        position: 'absolute',
        left: '100px'
      }}>
        {BubbleGroup.getBubble(1)}
        {BubbleGroup.getBubble(2)}
        {BubbleGroup.getBubble(3)}
      </div>
    );
  }

  /**
   * Returns a single bubble
   * @param position The bubble position
   * @returns {JSX}
   */
  static getBubble(position:Number) {
    let top = 0;
    let left = 0;
    switch (position) {
      case 1:
        top = 0;
        left = 0;
        break;
      case 2:
        top = 16;
        left = -5;
        break
      case 3:
        top = 10;
        left = 7;
        break;
    }
    return (
      <img
        src='images/bubble.png'
        style={{
          position: 'absolute',
          width: '10px',
          height: '10px',
          top: `${top}px`,
          left: `${left}px`,
        }}
      />
    );
  }
}