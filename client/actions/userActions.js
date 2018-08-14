const changeUser = name => {
  return {
    type: 'CHANGE_USER',
    payload: name
  };
};

const changeAge = age => {
  return {
    type: 'CHANGE_AGE',
    payload: age
  };
};

const changeLoc = loc => {
  return {
    type: 'CHANGE_LOCATION',
    payload: loc
  };
};

const error = err => {
  return {
    type: 'ERROR',
    payload: null
  };
}

export {
  changeUser,
  changeAge,
  changeLoc,
  error
};

// store.dispatch({type: 'CHANGE_USER', payload: 'John'});
// store.dispatch({type: 'CHANGE_AGE', payload: 24});
// store.dispatch({type: 'CHANGE_LOCATION', payload: 'Los Angeles'});
//
// store.dispatch({type: 'ERROR'});
