import React, { Component } from 'react';
import Radium from 'radium';

const styles = {
  base: {
    color: '#aaa',
  },
};

@Radium
export default class Page extends Component {
  render() {
    return <div
      style={[styles.base]}
    >33thewegre</div>;
  }
}
