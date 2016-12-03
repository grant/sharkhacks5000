import About from './About';
import React, { Component } from 'react';
import Radium from 'radium';
import Sky from './Sky';
import Sea from './Sea/Sea';

/**
 * # World Organization
 *
 * ## Vertical Layout
 *
 * --- 0
 * Space?
 * ---
 * Sky
 * ---
 * Sea level
 * ---
 * Epipelagic Zone (The Sunlight Zone)
 * ---
 * Mesopelagic Zone (The Twilight Zone)
 * ---
 * Bathypelagic Zone (The Midnight Zone)
 * ---
 * Abyssopelagic Zone (The Abyss)
 * ---
 * Hadalpelagic Zone (The Trenches)
 * ---
 * Sea floor
 * ---
 * Oceanic crust
 * ---
 * Lithosphere
 * ---
 * Earth mantle
 * --- WORLD_HEIGHT
 *
 *
 * ## Horizontal Layout
 *
 * - Same environment at same elevation
 * - Keep compass to center the player. Maybe use boats or the position of the sun too.
 *
 */
@Radium
export default class World extends Component {
  render() {
    const VIGNETTE_WIDTH = '600px';
    const VIGNETTE_RADIUS_MAX = 500; // px
    const VIGNETTE_RADIUS_MIN = -400; // px
    const VIGNETTE_DURATION = '1s';
    return (
      <div
        className='World'
        style={{
          overflow: 'hidden',
        }
      }>
        <div className='overlay' style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          zIndex: 1000,

          animation: `vignette-out ${VIGNETTE_DURATION} ease-in-out 1`,
          animationName: Radium.keyframes({
            '0%': {boxShadow: `0 0 ${VIGNETTE_WIDTH} ${VIGNETTE_RADIUS_MAX}px rgba(60,60,60,0.7) inset`,},
            '100%': {boxShadow: `0 0 ${VIGNETTE_WIDTH} ${VIGNETTE_RADIUS_MIN}px rgba(0,60,60,60.3) inset`,},
          }, 'ease-in-out'),
        }}>
          <About />
        </div>
        <Sky />
        <Sea />
      </div>
    );
  }
}