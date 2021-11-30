const initialState = {
  listOfTweets: null,
  error: null,
};

const twitterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getTweets":
      return {
        ...state,
        listOfTweets: action.payload,
        loadingTweets: false,
      };
    case "tweetError":
      return {
        ...state,
        loadingTweets: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default twitterReducer;
