import 'babel-polyfill';
import {DEBUG_MODE} from './utils/constants';
import Easter from './utils/easter';
import React from 'react';
import ReactDOM from 'react-dom';
import Page, {Type} from './components/Page';

/**
 * The home page
 */
window.onload = () => {
  console.log('Page loaded');
  ReactDOM.render(<Page type={Type.GAME}/>, document.querySelector('.app'));
  if (DEBUG_MODE) {
    Easter.displayConsoleMessage();
  }
};