import { createStore } from 'redux';

const reducer = (state, action) => {
  if (action.type === 'INCREASE') {
    return state + 1;
  } else if (action.type === 'DECREASE') {
    return state - 1;
  }
  return state;
}

const store = createStore(reducer, 0);

store.subscribe(() => {
  console.log('store changed', store.getState());
});

store.dispatch({type: 'INCREASE', payload: 1});
store.dispatch({type: 'INCREASE', payload: 1});
store.dispatch({type: 'INCREASE', payload: 1});
store.dispatch({type: 'INCREASE', payload: 1});
store.dispatch({type: 'DECREASE', payload: 1});
store.dispatch({type: 'DECREASE', payload: 1});
