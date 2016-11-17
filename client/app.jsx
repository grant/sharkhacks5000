// @flow

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux-immutable';


ReactDOM.render(
  <div>
    <BarkMessage />
    <BarkButton />
  </div>
  , document.querySelector('.app')
);
