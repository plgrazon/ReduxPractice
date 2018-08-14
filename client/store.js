import { applyMiddleware, combineReducers, createStore } from 'redux';

import logger from 'redux-logger';

import userReducer from './reducers/userReducer.js';
import tweetsReducer from './reducers/tweetsReducer.js';

const error = (store) => (next) => (action) => {
  try {
    next(action);
  } catch(error) {
    console.log('error ', error);
  }
}

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
});

const middleware = applyMiddleware(error, logger);

const store = createStore(reducers, middleware);

export default store;
