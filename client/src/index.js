import React from 'react';
import { render } from 'react-dom';
import App from './App.js';
// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from 'regenerator-runtime'; //regenerator needs to be in scope for async to work

render(
  <>
    <App />
  </>,
  document.getElementById('root')
);
