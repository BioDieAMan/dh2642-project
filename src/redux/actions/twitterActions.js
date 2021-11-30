import twitterConfig from "../../config/twitterApiConfig";
import axios from "axios";

export const getTweets = () => async (dispatch) => {
  const options = {
    method: "GET",
    url: twitterConfig.Url,
    params: {},
    headers: twitterConfig.header,
  };
  try {
    const response = await axios.request(options);
    dispatch({
      type: "getTweets",
      payload: response.data.data,
    });
  } catch (e) {
    dispatch({
      type: "tweetError",
      payload: e.message,
    });
  }
};
