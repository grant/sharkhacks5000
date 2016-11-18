// @flow

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Page from './page';

window.onload = () => {
  ReactDOM.render(<Page />, document.querySelector('.app'));
};
