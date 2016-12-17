import React, { Component } from 'react';
import ConfiguredRadium from './ConfiguredRadium';
import Radium from 'radium';
import Constants from '../utils/constants';
import Utils from '../utils/utils';

/**
 * The sky for the world.
 */
@ConfiguredRadium
export default class Sky extends Component {
  /**
   * Returns a cloud
   * @param name
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
      style={styles}/>;
  }

  /**
   * Returns a seagull
   * SVG from https://www.google.com/search?espv=2&biw=1600&bih=892&tbm=isch&sa=1&q=seagull+svg&oq=seagull+svg&gs_l=img.3..0i24k1.10412.10770.0.10987.3.3.0.0.0.0.81.232.3.3.0....0...1c.1.64.img..0.3.230...0j0i67k1.Rwk_ddKow2w#imgrc=2ywasSRnU9m3IM%3A
   * @param styles
   */
  static createBirdCluster(styles = {}) {
    let birdStyles = {
      position: 'absolute',
      opacity: 0.4,
    };
    let bird1Styles = Object.assign({
      width: '15px',
      top: '7px',
      left: '-9px',
    }, birdStyles);
    let bird2Styles = Object.assign({
      width: '25px',
      top: '0px',
      left: '0px',
    }, birdStyles);
    let bird3Styles = Object.assign({
      width: '15px',
      top: '9px',
      left: '18px',
    }, birdStyles);

    // Animate all birds
    // This animation subtly rotates the birds as they travel left and right
    return (
      <div className='birdPath' style={{
        animation: `birdAnim ${60}s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite`,
        position: 'absolute',
        animationName: Radium.keyframes({
          '0%': {left: '0%', top: '-5%'},
          '25%': {left: '20%', top: '30%'},
          '40%': {left: '80%', top: '70%'},
          '65%': {left: '-20%', top: '20%'},
          '65.001%': {left: '-20%', top: '40%'},
          '85%': {left: '110%', top: '60%'},
          '85.001%': {left: '0%', top: '-5%'},
          '100%': {left: '0%', top: '-5%'},
        }, 'pulse')
      }}>
        {/* This animation bobs the birds up and down, and side-to-side. */}
        <div className='birds' style={Object.assign(styles, {
          position: 'absolute',
          // http://easings.net/#easeInOutSine
          animation: `birdAnim ${20}s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite`,
          animationName: Radium.keyframes({
            '0%': {top: '10px'},
            '50%': {top: '-10px'},
            '100%': {top: '10px'},
          }, 'ease-in-out')
        })}>
          <img className="bird" style={bird1Styles} src='images/seagull.svg'/>
          {/* This animation spins this bird every few seconds */}
          <img className="bird" style={Object.assign(bird2Styles, {
            animation: `birdAnim ${14}s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite`,
            animationName: Radium.keyframes({
              '0%': {transform: 'rotate(0deg)'},
              '50%': {transform: 'rotate(0deg)'},
              '55%': {transform: 'rotate(360deg)'},
              '60%': {transform: 'rotate(360deg)'},
              '100%': {transform: 'rotate(360deg)'},
            }, 'ease-in-out'),
          })} src='images/seagull.svg'/>
          <img className="bird" style={bird3Styles} src='images/seagull.svg'/>
        </div>
      </div>
    );
  }

  /**
   * Renders the sky with a moon, cloud, and other styles
   * @returns {XML}
   */
  render() {
    const moonSize = 300;
    const cloudSpeed = 100; // seconds
    const isDayTime = Utils.isDayTime();

    let getStarsSection = () => {
      const NUM_STARS = 20;
      const STAR_SIZE = 5;
      const STAR_SIZE_STRING = `${STAR_SIZE}px`;
      const STAR_BOTTOM_PADDING = 0.1; // 0-1
      let stars = [];
      for (let i = 0; i < NUM_STARS; ++i) {
        const starTop = Math.random() * (1 - STAR_BOTTOM_PADDING);
        stars[i] = <div className='star' key={i} style={{
          position: 'absolute',
          top: `${starTop * 100}%`,
          left: `${Math.floor(Math.random() * 100)}%`,
          width: STAR_SIZE_STRING,
          height: STAR_SIZE_STRING,
          opacity: Math.random() * 0.4 * (1 - starTop * starTop),
          background: 'white',
          transform: 'rotate(45deg)'
        }}>
        </div>;
      }
      return <section className='stars'>
        {stars}
      </section>;
    }

    return (
      <div className='Sky' style={{
        height: '600px',
        position: 'relative',
        backgroundColor: isDayTime ? Constants.color.green : Constants.color.black
      }}>
        {getStarsSection()}
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
        {Sky.createBirdCluster({
          animation: `bird1 ${cloudSpeed * 0.9}s linear infinite`,
          animationName: Radium.keyframes({
            '0%': {left: '15%'},
            '50%': {left: '110%'},
            '50.0001%': {left: '-20%'},
            '100%': {left: '15%'},
          }, 'pulse')
        })}
        <div className="moon" style={{
          borderRadius: `${moonSize}px`,
          width: `${moonSize}px`,
          height: `${moonSize}px`,
          margin: `-100px calc(50% - ${moonSize/2}px)`,
          position: 'absolute',
          bottom: '0',

          boxShadow: 'rgba(255, 255, 255, 0.1) 0px 0px 0px 10px,' +
            'rgba(255, 255, 255, 0.1) 0px 0px 0px 20px,' +
            'rgba(255, 255, 255, 0.05) 0px 0px 0px 30px',
          backgroundColor: isDayTime ? '#fbdcc2' : 'rgb(241, 245, 247)',

          animation: 'bigger 30s ease 0s infinite',
          animationName: Radium.keyframes({
            '0%': {transform:'scale(1)'},
            '50%': {transform:'scale(1.1)'},
            '100%': {transform:'scale(1)'},
          }, 'pulse'),
        }}>
        </div>
        <div className="moonshadowclip">
          {/* This moon shadow doesn't scale really well with browser width so we show it lightly. */}
          <div className="moonshadow" style={{
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 40%, rgba(214, 109, 77, 0) 100%)',
            borderRadius: '0 0 300px 300px',
            height: '64px',
            width: `${moonSize}px`,
            position: 'absolute',
            zIndex: '100',
            bottom: '0',
            margin: `-15px calc(50% - ${moonSize/2}px)`,

            /* Copy animation from top */
            animation: 'bigger 30s ease 0s infinite',
            animationName: Radium.keyframes({
              '0%': {transform:'scale(1)'},
              '50%': {transform:'scale(1.1)'},
              '100%': {transform:'scale(1)'},
            }, 'pulse'),
          }}>
          </div>
        </div>
      </div>
    );
  }
}
