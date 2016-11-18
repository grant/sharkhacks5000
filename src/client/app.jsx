// @flow

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Page from './page';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import { combineReducers } from 'redux-immutable';

window.onload = () => {
  ReactDOM.render(
    <div>
      <Page />
    </div>
    , document.querySelector('.app')
  );
};
