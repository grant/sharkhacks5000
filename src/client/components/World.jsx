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
    let isBlurred = false;
    let depth = 300;
    let styles = {
      marginTop: `-${depth}px`,
      overflow: 'hidden',
      transition: '1s filter linear',
    };
    if (isBlurred) {
      styles.filter = 'blur(5px)';
    }

    return (
      <div
        className='World'
        style={styles}
      >
        <Sky />
        <Sea />
      </div>
    );
  }
}