import React, { Component } from 'react';
import Radium from 'radium';
import Boat from './Boat';
import Surface from './zones/Surface';
import Abyss from './zones/Abyss';
import Fish, {Type} from './Fish';
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
        {this.getAllFish()}
        <div className='backgrounds'>
          <Surface />
          <SunlightZone />
          <TwilightZone />
          <MidnightZone />
          <Abyss />
          <Trenches />
        </div>
      </section>
    );
  }

  getAllFish() {
    let allFish = [{
      type: Type.Small1,
    }, {
      type: Type.Medium2,
    }];
    return <ul className='all-fish' style={{
      position: 'absolute',
      width: '100%',
      height: '100px',
      zIndex: 100,
    }}>
      {allFish.map(fish => {
        return <Fish type={fish.type} />
      })}
    </ul>;
  }
}
