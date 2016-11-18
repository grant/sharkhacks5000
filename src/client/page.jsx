import React, { Component } from 'react';

export default class Page extends Component {
  render() {
    if (this.window) {
      return null;
    }
    return <div>hihi</div>;
  }
}
