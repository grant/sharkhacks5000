import React, { Component } from 'react';
import Radium from 'radium';
import Boat from './Boat';
import Surface from './zones/Surface';
import Abyss from './zones/Abyss';
import Trenches from './zones/Trenches';
import MidnightZone from './zones/MidnightZone';
import SunlightZone from './zones/SunlightZone';
import TwilightZone from './zones/TwilightZone';

@Radium
export default class Sea extends Component {
  render() {
    /**
     * Ocean layers
     * http://www.seasky.org/deep-sea/ocean-layers.html
     *
     * Surface
     * Epipelagic Zone (The Sunlight Zone)
     * Mesopelagic Zone (The Twilight Zone)
     * Bathypelagic Zone (The Midnight Zone)
     * Abyssopelagic Zone (The Abyss)
     * Hadalpelagic Zone (The Trenches)
     */
    return (
      <section className='Sea' style={{
        backgroundColor: 'red',
        position: 'relative',
      }}>
        <Surface />
        <SunlightZone />
        <TwilightZone />
        <MidnightZone />
        <Abyss />
        <Trenches />
      </section>
    );
  }
}
