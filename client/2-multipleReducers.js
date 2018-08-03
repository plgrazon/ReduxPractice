import { combineReducers, createStore } from 'redux';

const userReducer = (state = {}, actions) => {
  return state;
}

const tweetsReducer = (state = [], actions) => {
  return state;
}

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
});

const store = createStore(reducers, {
});

store.subscribe(() => {
  console.log('store changed', store.getState());
});

store.dispatch({type: 'CHANGE_USER', payload: 'Paolo'});
store.dispatch({type: 'CHANGE_AGE', payload: 24});
