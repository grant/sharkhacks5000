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
        <div className='overlay' style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 100,
        }}>
          <h1 className="title" style={{
            position: 'relative',
            display: 'block',
            color: '#555',
            marginTop: '80px',
            textAlign: 'center',
            fontSize: '50px',
          }}>SharkHacks5000</h1>
          <p style={{
            width: '400px',
            color: 'white',
            background: 'rgba(0,0,0,0.1)',
            padding: '10px',
            borderRadius: '3px',
            lineHeight: 1.2,
            textShadow: '2px 2px rgba(90,90,90,0.2)',
            margin: '0 auto',
          }}>
            SharkHacks5000 (/ˈshahrk.hæks.5000/) is
            the most epically incredible super-premier
            really really big hackathon that has ever
            happened or will ever happen in the history
            of the entire known universe, especially on
            a boat.
            <br />
            <br />
            © {new Date().getFullYear()} Grant Timmerman
          </p>
        </div>
        <Sky />
        <Sea />
      </div>
    );
  }
}