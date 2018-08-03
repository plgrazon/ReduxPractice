import { createStore } from 'redux';

const initialState = {
  result: 0,
  lastValues: [],
  name: 'Paolo'
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE':
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
    case 'DECREASE':
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
  }
  return state;
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log('store changed', store.getState());
});

store.dispatch({type: 'INCREASE', payload: 1});
store.dispatch({type: 'INCREASE', payload: 1});
store.dispatch({type: 'INCREASE', payload: 1});
store.dispatch({type: 'INCREASE', payload: 1});
store.dispatch({type: 'DECREASE', payload: 1});
store.dispatch({type: 'DECREASE', payload: 1});
