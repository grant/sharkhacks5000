import 'babel-polyfill';
import Easter from './easter';
import React from 'react';
import ReactDOM from 'react-dom';
import Page from './components/Page';

window.onload = () => {
  ReactDOM.render(<Page />, document.querySelector('.app'));
  Easter.displayConsoleMessage();
};