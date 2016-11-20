import React, { Component } from 'react';
import Radium from 'radium';

@Radium
export default class Sea extends Component {
  render() {
    return (
      <section className='Sea' style={{
        backgroundColor: 'red',
      }}>
        Seassssss
        <img ref='Boat' src='images/boat.svg' />
      </section>
    );
  }
}
