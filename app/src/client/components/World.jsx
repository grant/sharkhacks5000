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
    return (
      <div
        className='World'
        style={{
          overflow: 'hidden',
        }
      }>
        <Sky />
        <Sea />
      </div>
    );
  }
}