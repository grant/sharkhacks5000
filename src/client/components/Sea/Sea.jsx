import React, { Component } from 'react';
import Radium from 'radium';
import Surface from './zones/Surface';
import Abyss from './zones/Abyss';
import Fish, {Type} from './Fish';
import Trenches from './zones/Trenches';
import MidnightZone from './zones/MidnightZone';
import SunlightZone from './zones/SunlightZone';
import TwilightZone from './zones/TwilightZone';
import GameLoop from '../../utils/gameloop';

@Radium
export default class Sea extends Component {
  constructor() {
    super();
    GameLoop.tickListeners.push((gameLoop) => {
      this.setState({
        gameTime: gameLoop.gameTime
      });
    })
  }

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

  /**
   * Gets all the fish in the sea.
   */
  getAllFish() {
    let allFish = [{
      type: Type.Small1,
    }, {
      type: Type.Medium2,
    }];
    let x = (this.state.gameTime/1000)%100;
    return <ul className='all-fish' style={{
      position: 'absolute',
      width: '100%',
      height: '100px',
      zIndex: 100,
    }}>
      {allFish.map(fish => {
        return <Fish
          type={fish.type}
          left={`${x}%`}
          top="20%"
        />
      })}
    </ul>;
  }
}
