import React, { Component } from 'react';
import Radium from 'radium';

/**
 * The about section.
 */
@Radium
export default class About extends Component {
  render() {
    let getAboutLink = () => {
      return (
        <a href='https://grant.cm/'>Grant Timmerman</a>
      );
    };
    let getCopyright = () => {
      return <span className='copyright' style={{
        opacity: 0.8,
      }}>{
        '© ' + (new Date().getFullYear())
      }</span>;
    };
    let grammarStyle = {
      fontStyle: 'italic',
      color: 'lightgray',
    };

    return (
      <section className='about' style={{
        opacity: 1,
        animation: 'fade 2s ease 0s 1',
        animationName: Radium.keyframes({
          '0%': {opacity: 0},
          '30%': {opacity: 0},
          '100%': {opacity: 1},
        }, 'ease-in-out'),
      }}>
        <h1 className="title" style={{
            position: 'relative',
            display: 'block',
            color: '#555',
            marginTop: '80px',
            textAlign: 'center',
            fontSize: '50px',
          }}>SharkHacks5000</h1>
        <p style={{
            width: '400px',
            color: 'white',
            background: 'rgba(0,0,0,0.2)',
            padding: '10px',
            borderRadius: '3px',
            lineHeight: 1.2,
            textShadow: '2px 2px rgba(90,90,90,0.2)',
            margin: '0 auto',
          }}>
          SharkHacks5000 <em style={grammarStyle}>(/ˈshahrk.hæks.5000/)</em> is
          the most epically incredible super-premier
          really really big hackathon that has ever
          happened or will ever happen in the history
          of the entire known universe, especially on
          a boat.
          <br />
          <br />
          {getCopyright()} {getAboutLink()}
        </p>
      </section >
    );
  }
}
