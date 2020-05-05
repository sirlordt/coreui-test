// import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import './polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { freeSet, flagSet, brandSet } from '@coreui/icons';
// eslint-disable-next-line import/extensions
import { logo } from './assets/icons/logo';

import App from './App';
import * as serviceWorker from './serviceWorker';

React.icons = {
  ...freeSet,
  ...flagSet,
  ...brandSet,
  logo,
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById( 'root' ),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
