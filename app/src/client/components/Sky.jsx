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
  static createCloud(name, styles = {}) {
    styles = Object.assign(styles, {
      zIndex: 100,
      width: '200px',
      opacity: 0.5,
      position: 'absolute',
    });
    return <img
        className="cloud"
        src={`images/${name}.svg`}
        style={styles} />;
  }

  /**
   * Returns a seagull
   * SVG from https://www.google.com/search?espv=2&biw=1600&bih=892&tbm=isch&sa=1&q=seagull+svg&oq=seagull+svg&gs_l=img.3..0i24k1.10412.10770.0.10987.3.3.0.0.0.0.81.232.3.3.0....0...1c.1.64.img..0.3.230...0j0i67k1.Rwk_ddKow2w#imgrc=2ywasSRnU9m3IM%3A
   * @param styles
   */
  static createBirdCluster(styles = {}) {
    let bird1Styles = {
      position: 'absolute',
      width: '15px',
      top: '7px',
      left: '-5px',
    };
    let bird2Styles = {
      position: 'absolute',
      width: '25px',
      top: '0px',
      left: '0px',
    };
    let bird3Styles = {
      position: 'absolute',
      width: '15px',
      top: '9px',
      left: '18px',
    };

    return <div style={Object.assign(styles, {
      position: 'absolute'
    })}>
      <img className="bird" style={bird1Styles} src='images/seagull.svg' />
      <img className="bird" style={bird2Styles} src='images/seagull.svg' />
      <img className="bird" style={bird3Styles} src='images/seagull.svg' />
    </div>;
  }

  /**
   * Renders the sky with a moon, cloud, and other styles
   * @returns {XML}
   */
  render() {
    const moonSize = 300;
    const cloudSpeed = 100; // seconds
    return (
      <div className='Sky' style={{
        height: '600px',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: Constants.color.green
      }}>
        <section className="clouds">
          {Sky.createCloud('cloud1', {
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
          {Sky.createCloud('cloud2', {
            top: '50%',
            animation: `cloud2 ${cloudSpeed * 1.1}s linear infinite`,
            animationName: Radium.keyframes({
              '0%': {left: '80%'},
              '50%': {left: '20%'},
              '100%': {left: '80%'},
            }, 'pulse')
          })}
          {Sky.createCloud('cloud3', {
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
        <section className="birds">
          {Sky.createBirdCluster({
            animation: `bird1 ${cloudSpeed * 0.9}s linear infinite`,
            animationName: Radium.keyframes({
              '0%': {left: '15%'},
              '50%': {left: '110%'},
              '50.0001%': {left: '-20%'},
              '100%': {left: '15%'},
            }, 'pulse')
          })}
        </section>
        <div className="moon" style={{
          borderRadius: `${moonSize}px`,
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
