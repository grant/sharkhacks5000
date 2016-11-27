import React, { Component } from 'react';
import Radium from 'radium';

// SEE THIS IF YOU WANT TO FINISH THE BOAT
// CSS Keyframes
// https://github.com/dubhacks/15f/blob/fedf5447e2fffeae8d42dbfb46d527cf55c051fe/src/components/boat/boat.styl
const boatRockAnimationTime = '3s';
const boatTravelTime = '1s';

@Radium
export default class Boat extends Component {
  /**
   * The water height varies on the width of the browser.
   * Update the boat height off the water on load and when the window resizes.
   */
  _updateBoatHeightOffWater() {
    var browserWidth = window.innerWidth;
    this.refs.Boat.style.bottom = (Math.pow(browserWidth, 2) / 100000) + 'px';
  }

  componentDidMount() {
    var self = this;
    self._updateBoatHeightOffWater();
    window.addEventListener('resize', function(e) {
      self._updateBoatHeightOffWater();
    });
  }

  render() {
    return (
      <div className='Boat' ref='Boat' style={{
        position: 'absolute',
        left: 0,
        bottom: '10px',
        width: '15%',
        animation: `up-and-down ${boatRockAnimationTime} ease-in-out infinite, boat-back-and-forth ${boatTravelTime} ease-in-out infinite`,
        animationName: Radium.keyframes({
          '0%': {transform:'translateY(10px) rotate(-2deg)'},
          '50%': {transform:'translateY(0px) rotate(2deg)'},
          '100%': {transform:'translateY(10px) rotate(-2deg)'},
        }, 'ease-in-out'),
      }}>
        <div className='boat-container'>
          <img ref='img' style={{
            width: '100%',
          }} src='images/boat.svg' />
        </div>
      </div>
    );
  }
}