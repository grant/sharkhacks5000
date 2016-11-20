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
      zIndex: 100,
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
    const cloudSpeed = 100; // seconds
    return (
      <div className='Sky' style={{
        height: '400px',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: Constants.color.green
      }}>
        <section className="clouds">
          {this.createCloud({
            top: '25%',
            animation: `cloud1 ${cloudSpeed}s linear infinite`,
            animationName: Radium.keyframes({
              '0%': {left: '10%'},
              '15%': {left: '4%'},
              '30%': {left: '20%'},
              '70%': {left: '80%'},
              '100%': {left: '10%'},
            }, 'pulse')
          })}
          {this.createCloud({
            top: '50%',
            animation: `cloud2 ${cloudSpeed * 1.1}s linear infinite`,
            animationName: Radium.keyframes({
              '0%': {left: '80%'},
              '50%': {left: '20%'},
              '100%': {left: '80%'},
            }, 'pulse')
          })}
          {this.createCloud({
            top: '75%',
            animation: `cloud3 ${cloudSpeed * 0.9}s linear infinite`,
            animationName: Radium.keyframes({
              '0%': {left: '15%'},
              '50%': {left: '110%'},
              '50.0001%': {left: '-20%'},
              '100%': {left: '15%'},
            }, 'pulse')
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
        <h1 className="title" style={{
          position: 'relative',
          display: 'block',
          marginTop: '80px',
          textAlign: 'center',
          fontSize: '40px',
        }}>SharkHacks5000</h1>
      </div>
    );
  }
}
