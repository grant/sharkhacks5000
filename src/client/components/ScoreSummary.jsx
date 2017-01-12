import React, { Component } from 'react';
import Radium from 'radium';
import Utils from '../utils/utils';

/**
 * Displays the summary of the score of a part of the game.
 *
 * Inspired by Alto.
 */
@Radium
export default class ScoreSummary extends Component {
  static defaultProps = {

  }

  render() {
    // Be sure to add a `filter: blur(8px)` to the parent background when showing this component.
    // Make these props
    let scoreItems = [{
      title: 'Max depth travelled',
      icon: 'depth',
      value: '100m',
    }, {
      title: 'Fish score',
      icon: 'fishBones',
      value: '666',
    }, {
      title: 'Coins collected',
      icon: 'coin',
      value: '333',
    }, {
      title: 'Treasure collected',
      icon: 'treasure',
      value: '2',
    }, {
      footer: true,
      title: 'Total',
      value: Utils.formatNumberWithCommas(123123),
    }];

    return (
      <article className='ScoreSummary' style={{
        width: '400px',
        margin: '20px auto',
      }}>
        <h1 style={{
          color: 'black',
          textSize: '20px',
          textAlign: 'center',
          fontWeight: 700,
          padding: '10px',
        }}>Your Score</h1>
        <ul className="score-items">{scoreItems.map((scoreItem, i) => {
          let iconSrc = scoreItem.icon ? `images/${scoreItem.icon}.svg` : null;
          let rowColor = (i % 2 === 0) ? 'rgba(0,0,0,0.05)' : 'transparent';
          return <li
            key={Math.random() + ''}
            style={{
              backgroundColor: scoreItem.footer ? 'rgba(0,0,0,0.1)' : rowColor,
              padding: scoreItem.footer ? '5px 7px' : '2px 7px',
              color: scoreItem.footer ? 'white' : 'black',
            }
          }>
            <span className="title" style={{
            }}>
              {iconSrc ? <img className="icon" src={iconSrc} style={{
                paddingRight: '10px',
                opacity: 0.7,
                width: '15px',
              }} /> : ''}
              {scoreItem.title}
            </span>
            <span className="value" style={{
              float: 'right'
            }}>{scoreItem.value}</span>
          </li>;
        })}</ul>
        <div style={{
          display: 'flex',
          color: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '10px auto',
        }} onClick={function() {
          console.log('shared');
        }}>
          <img src='images/share.svg' style={{
            width: '30px'
          }} />Share
        </div>
      </article>
    );
  }
}
