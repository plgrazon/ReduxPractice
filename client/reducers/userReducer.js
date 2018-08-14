const initialState = {
  name: 'Ceasar',
  age: null,
  location: null
};

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

export default userReducer;
