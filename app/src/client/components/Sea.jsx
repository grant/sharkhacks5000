import React, { Component } from 'react';
import Radium from 'radium';

@Radium
export default class Sea extends Component {
  render() {
    let getSeaStyles = (seaNumber) => {
      let animationDuration = (seaNumber === 1) ? '10s': '3s';
      let opacity = (seaNumber === 1) ? 1 : 0.4;
      let translate = (seaNumber === 1) ? '-20px' : '0';
      return {
        position: 'absolute',
        top: '-20px',
        width: '110%',
        bottom: '-10px',
        animation: `left-right ${animationDuration} ease-in-out infinite`,
        animationName: Radium.keyframes({
          '0%': {left: '-20px'},
          '50%': {left: '-10px'},
          '100%': {left: '-20px'},
        }, 'left-right'),
        opacity,
        transform: `translateX(${translate})`,
      };
    };

    return (
      <section className='Sea' style={{
        backgroundColor: 'red',
        position: 'relative',
      }}>
        Seasssssss
        <img src='images/boat.svg' />
        <img src='images/sea.svg' style={getSeaStyles(1)} />
        <img src='images/sea.svg' style={getSeaStyles(2)} />
      </section>
    );
  }
}
