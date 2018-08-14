const addTweet = tweet => {
  return {
    type: 'ADD_TWEET',
    payload: tweet
  };
};

const editTweet = tweet => {
  return {
    type: 'EDIT_TWEET',
    payload: tweet
  };
};

const deleteTweet = tweet => {
  return {
    type: 'DELETE_TWEET',
    payload: tweet
  };
};

export {
  addTweet,
  editTweet,
  deleteTweet
};

// store.dispatch({type: 'ADD_TWEET', payload: {index: null, text: 'Hello World!'}});
// store.dispatch({type: 'ADD_TWEET', payload: {index: null, text: 'I love Redux!'}});
// store.dispatch({type: 'EDIT_TWEET', payload: {index: 0, text: 'Bye World'}});
// store.dispatch({type: 'DELETE_TWEET', payload: {index: 0, text: null}});\
