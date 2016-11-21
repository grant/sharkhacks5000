import React, { Component } from 'react';
import Radium from 'radium';

@Radium
export default class SunlightZone extends Component {
  render() {
    return (
      <section style={{
        background: 'linear-gradient(#00b2e2, #0081bd)',
        height: '1000px',
      }}
      >Sunlight</section>
    );
  }
}
