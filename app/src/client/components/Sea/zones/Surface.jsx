import React, { Component } from 'react';
import Radium from 'radium';
import Boat from './../Boat';

@Radium
export default class Surface extends Component {
  render() {
    let getWaveStyles = (waveNumber) => {
      let animationDuration = (waveNumber === 1) ? '10s': '3s';
      let opacity = (waveNumber === 1) ? 1 : 0.4;
      let translate = (waveNumber === 1) ? '-20px' : '0';
      return {
        position: 'absolute',
        width: '210%',
        bottom: '-10px',
        animation: `left-right ${animationDuration} ease-in-out infinite`,
        animationName: Radium.keyframes({
          '0%': {left: '-20px'},
          '50%': {left: '-10px'},
          '100%': {left: '-20px'},
        }, 'left-right'),
        opacity,
        transform: `translateX(${translate})`,
        // Make waves larger if on mobile
        '@media screen and (max-width: 500px)': {
          width: '200%',
        },
      };
    };

    /*Disable the boat for now, unfinished.*/
    /*<Boat />*/

    return (
      <section className='Surface' style={{
        position: 'relative'
      }}>
        <Boat />
        <img src='images/wave.svg' style={getWaveStyles(1)} />
        <img src='images/wave.svg' style={getWaveStyles(2)} />
      </section>
    );
  }
}