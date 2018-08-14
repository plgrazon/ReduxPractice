import React from 'react';
import {render} from 'react-dom';

import store from './store.js';

import { Provider } from 'react-redux';

import App from './containers/app.js';

render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('app')
);
