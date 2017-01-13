import React, { Component } from 'react';
import Radium from 'radium';

export const Type = {
  Small1: 'Small1',
  Small2: 'Small2',
  Small3: 'Small3',
  Small4: 'Small4',
  Medium1: 'Medium1',
  Medium2: 'Medium2',
  Medium3: 'Medium3',
  Medium4: 'Medium4',
  Large1: 'Large1',
  Large2: 'Large2',
  Large3: 'Large3',
  Large4: 'Large4',
};

@Radium
export default class Fish extends Component {
  render() {
    const fishImg = `images/fish${this.props.type}.png`;
    let direction = 1;
    let left = '10%';
    let top = '120%';
    return (
      <li className='Fish' style={{
        position: 'absolute',
        left: this.props.left,
        top: this.props.top,
        transition: 'ease-in-out 200ms',
        transform: `scaleX(${direction})`,
      }}>
        <img ref='img' style={{
          width: '100%',
        }} src={fishImg}/>
      </li>
    );
  }
}

Fish.propTypes = {
  type: React.PropTypes.string.isRequired,
  left: React.PropTypes.string,
  top: React.PropTypes.string,
};

Fish.defaultProps = {
  type: '???',
};