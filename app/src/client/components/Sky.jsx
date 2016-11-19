import React, { Component } from 'react';
import ConfiguredRadium from './ConfiguredRadium';
import Radium from 'radium';
import Constants from './../constants';

@ConfiguredRadium
export default class Sky extends Component {
  /**
   * Returns a cloud
   * @param styles
   */
  createCloud(styles = {}) {
    styles = Object.assign(styles, {
      width: '10px',
      height: '10px',
      position: 'absolute',
      backgroundColor: 'white',
    });
    return <div className="cloud" style={styles}>cloud</div>;
  }

  /**
   * Renders the sky with a moon, cloud, and other styles
   * @returns {XML}
   */
  render() {
    const moonSize = 240;
    return (
      <div className='Sky' style={{
        height: '400px',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: Constants.color.green
      }}>
        <section className="clouds">
          {this.createCloud({
            top: '50px',
            left: '40%',
          })}
          {this.createCloud({
            top: '80px',
            left: '10%',
          })}
        </section>
        <div className="moon" style={{
          width: `${moonSize}px`,
          height: `${moonSize}px`,
          margin: `-100px calc(50% - ${moonSize/2}px)`,
          position: 'absolute',
          bottom: '0',

          //animation: 'namename 3s ease 0s infinite',
          //animationName: Radium.keyframes({
          //  '0%': {width: '10%'},
          //  '50%': {width: '50%'},
          //  '100%': {width: '11%'},
          //}, 'pulse'),
          backgroundColor: Constants.color.gray
        }}>moon
        </div>
      </div>
    );
  }
}
