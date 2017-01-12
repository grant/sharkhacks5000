import React, { Component } from 'react';
import Radium from 'radium';
import Constants from '../utils/constants';

/**
 * A fancy but simple button.
 */
@Radium
export default class Button extends Component {
  render() {
    return (
      <div onClick={this.props.onClick.bind(this)} style={{
        boxShadow: '0 0 2px 0 rgba(0,0,0,.07), 0 3px 8px 0 rgba(0,0,0,.1)',
        borderBottom: '1px rgba(23, 12, 0)',
        cursor: 'pointer',
        display: 'inline-block',
        padding: '5px 17px',
        backgroundColor: Constants.color.green,
        color: 'white',
        borderRadius: '2px',
        maxWidth: '200px',
        fontWeight: 100,
        transition: '200ms ease-in-out box-shadow, 200ms ease-in-out background-color',
        outline: 'none',
        userSelect: 'none',
        ':hover': {
          backgroundColor: Constants.color.greenHover,
          boxShadow: '0 0 2px 0 rgba(0,0,0,.17), 0 3px 8px 0 rgba(0,0,0,.2)',
        },
        ':active': {
          backgroundColor: Constants.color.greenActive,
        }
      }}>
        {this.props.content}
      </div>
    );
  }
}

Button.propTypes = {
  onClick: React.PropTypes.func,
  content: React.PropTypes.element,
};

Button.defaultProps = {
  onClick: () => {},
  content: 'TODO: CHANGE BUTTON CONTENT'
};