import { combineReducers, createStore } from 'redux';

const userReducer = (state = {}, action) => {
  let newState = Object.assign({}, state);
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
  }
  return state;
}

const tweetsReducer = (state = [], action) => {
  return state;
}

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
});

const store = createStore(reducers);

store.subscribe(() => {
  console.log('store changed', store.getState());
});

store.dispatch({type: 'CHANGE_USER', payload: 'Paolo'});
store.dispatch({type: 'CHANGE_AGE', payload: 24});
store.dispatch({type: 'CHANGE_LOCATION', payload: 'Los Angeles'});
