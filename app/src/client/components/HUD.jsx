import About from './About';
import React, { Component } from 'react';
import Radium from 'radium';

/**
 * Content that is _fixed_ to the viewport of the screen.
 * Note that the root node is `position: fixed`. So no scrolling.
 */
@Radium
export default class HUD extends Component {
  render() {
    let coinCount = 999999;

    const HUD_PADDING = '20px';


    const VIGNETTE_WIDTH = '600px';
    const VIGNETTE_RADIUS_MAX = 500; // px
    const VIGNETTE_RADIUS_MIN = -400; // px
    const VIGNETTE_DURATION = '1s';

    return <section className='HUD' style={{
      position: 'fixed',
      transform: 'translateZ(0)', // for performance
      width: '100%',
      height: '100%',
      top: 0,
      zIndex: 1000,

      opacity: 1,
      //boxShadow: '10px 1px 100px 100px black inset',
      animation: `vignette-out ${VIGNETTE_DURATION} ease-in-out`,
      animationName: Radium.keyframes({
        '0%': {boxShadow: `0 0 ${VIGNETTE_WIDTH} ${VIGNETTE_RADIUS_MAX}px rgba(30,30,30,1) inset`,},
        '10%': {boxShadow: `0 0 ${VIGNETTE_WIDTH} ${VIGNETTE_RADIUS_MAX}px rgba(30,30,30,1) inset`,},
        '100%': {boxShadow: `0 0 ${VIGNETTE_WIDTH} ${VIGNETTE_RADIUS_MIN}px rgba(30,30,30,0) inset`,},
      }, 'ease-in-out'),
    }}>
      <About />
      <div className='coin-count' style={{
        borderRadius: '5px',
        position: 'absolute',
        top: 0,
        right: 0,
        padding: '3px 5px',
        margin: HUD_PADDING,
        backgroundColor: 'rgba(100, 100, 100, 0.2)',
      }}>
        <div style={{
          width: '10px',
          height: '10px',
          borderRadius: '10px',
          display: 'inline-block',
          backgroundColor: 'rgb(250, 200, 0)',
        }}></div>
        <span className='coin-amount' style={{
          paddingLeft: '5px',
          fontWeight: 700,
          color: 'white',
        }}>{coinCount.toLocaleString()}</span>
      </div>
    </section>;
  }
}
