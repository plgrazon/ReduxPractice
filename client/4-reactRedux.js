import React from 'react';
import {render} from 'react-dom';

import { applyMiddleware, combineReducers, createStore } from 'redux';

import logger from 'redux-logger';
import { Provider } from 'react-redux';

import App from './container/app.js';

const initialState = {
  name: 'Ceasar',
  age: null,
  location: null
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CHANGE_USER':
      state = {...state, name: action.payload}
      // es5 version:
      // state = Object.assign({}, state, {name:action.payload});
      break;
    case 'CHANGE_AGE':
      state = {...state, age: action.payload}
      // es5 version:
      // state = Object.assign({}, state, {age:action.payload});
      break;
    case 'CHANGE_LOCATION':
      state = {...state, location: action.payload}
      // es5 version:
      // state = Object.assign({}, state, {location:action.payload});
      break;
    case 'ERROR':
      throw new Error('Breaking Code');
      break;
  }
  return state;
}

const tweetsReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TWEET':
      state = [
        ...state, {
          timeStamp: Date(),
          tweet: action.payload.text
      }]
      break;
    case 'EDIT_TWEET':
      state = [...state];
      let idx = action.payload.index;
      let text = action.payload.text;

      state[idx] = {
        timeStamp: Date(),
        tweet: text
      }
      break;
    case 'DELETE_TWEET':
      let index = action.payload.index;
      state = [...state.slice(0, index), ...state.slice(index + 1)];
      break;
  }
  return state;
}

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
});

// Basic logger but the logger from Redux is better
// const logger = (store) => (next) => (action) => {
//   console.log('action fired', action);
//   next(action);
// }

const error = (store) => (next) => (action) => {
  try {
    next(action);
  } catch(error) {
    console.log('error ', error);
  }
}

const middleware = applyMiddleware(error, logger);

const store = createStore(reducers, middleware);

store.subscribe(() => {
  // console.log('store changed', store.getState());
});

// store.dispatch({type: 'CHANGE_USER', payload: 'John'});
// store.dispatch({type: 'CHANGE_AGE', payload: 24});
// store.dispatch({type: 'CHANGE_LOCATION', payload: 'Los Angeles'});
//
// store.dispatch({type: 'ERROR'});
//
// store.dispatch({type: 'ADD_TWEET', payload: {index: null, text: 'Hello World!'}});
// store.dispatch({type: 'ADD_TWEET', payload: {index: null, text: 'I love Redux!'}});
// store.dispatch({type: 'EDIT_TWEET', payload: {index: 0, text: 'Bye World'}});
// store.dispatch({type: 'DELETE_TWEET', payload: {index: 0, text: null}});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
