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

export default tweetsReducer;
