import React, { Component } from 'react';
import Radium from 'radium';

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
      value: '123,123',
    }];

    return (
      <article className='ScoreSummary' style={{
        color: 'black',
        width: '400px',
      }}>
        <h1>Your Score</h1>
        <ul className="score-items">{scoreItems.map(scoreItem => {
          let iconSrc = scoreItem.icon ? `images/${scoreItem.icon}.svg` : null;
          return <li
            key={scoreItem.icon}
            style={{
              backgroundColor: scoreItem.footer ? 'rgba(#333, 0.2)' : null,
            }
          }>
            <span className="title" style={{
              textAlign: 'left',
            }}>
              {iconSrc ? <img className="icon" src={iconSrc} style={{
                paddingRight: '10px',
                width: '15px',
              }} /> : ''}
              {scoreItem.title}
            </span>
            <span className="value" style={{
              textAlign: 'right',
            }}>{scoreItem.value}</span>
          </li>;
        })}</ul>
      </article>
    );
  }
}
