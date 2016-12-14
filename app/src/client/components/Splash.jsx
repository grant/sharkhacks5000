import React, {Component} from 'react';
import Radium from 'radium';

@Radium
export default class Splash extends Component {
  render() {
    return (
      <section className='splash' style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        position: 'absolute',
        width: '100%',
        zIndex: 10000,
        background: 'black',
      }}>
        [SPLASH IMAGE]
      </section>
    );
  }
}