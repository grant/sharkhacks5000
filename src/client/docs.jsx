import 'babel-polyfill';
import {DEBUG_MODE} from './utils/constants';
import React from 'react';
import ReactDOM from 'react-dom';
import Page, {Type} from './components/Page';

/**
 * The documentation pages
 */
window.onload = () => {
  ReactDOM.render(<Page type={Type.DOCS} />, document.querySelector('.app'));
};