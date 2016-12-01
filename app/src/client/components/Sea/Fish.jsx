import React, { Component } from 'react';
import Radium from 'radium';


const Type = {
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
    let fishType = Type.Large3;
    const fishImg = `images/fish${fishType}.png`;
    return (
      <li className='Fish' style={{
          position: 'absolute',
        }}>
        <img ref='img' style={{
            width: '100%',
          }} src={fishImg}/>
      </li>
    );
  }
}
