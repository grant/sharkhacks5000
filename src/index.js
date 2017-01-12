import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Page, {Type} from './client/components/Page';
import {DEBUG_MODE} from './client/utils/constants';
import Easter from './client/utils/easter';

window.onload = () => {
  console.log('Page loaded');
  ReactDOM.render(<Page type={Type.GAME}/>, document.querySelector('.app'));
  if (DEBUG_MODE) {
    Easter.displayConsoleMessage();
  }
}