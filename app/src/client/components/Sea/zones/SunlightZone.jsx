import React, { Component } from 'react';
import Radium from 'radium';

@Radium
export default class SunlightZone extends Component {
  render() {
    return (
      <section className='SunlightZone' style={{
        background: 'linear-gradient(#00b2e2, #0081bd)',
        height: '1000px',
      }}
      >
        <div className='fish'>

        </div>
        <div className='container' style={{
          paddingTop: '40px',
        }}>
          {/* Scale X and make move left and right*/}
          <svg style={{
            fill: 'rgba(0,0,0,0.1)',
            position: 'absolute',
            transform: 'rotate(180deg) scaleY(0.3)',
            transformOrigin: 'top',
          }} viewBox='0 0 500 150' preserveAspectRatio='xMinYMin meet'>
            <path d='M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z' />
          </svg>
          <svg style={{
            fill: 'rgba(0,0,0,0.1)',
            position: 'absolute',
            transform: 'rotate(0deg) scaleY(0.1)',
            transformOrigin: 'top',
          }} viewBox='0 0 500 150' preserveAspectRatio='xMinYMin meet'>
            <path d='M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z' />
          </svg>
        </div>
      </section>
    );
  }
}
