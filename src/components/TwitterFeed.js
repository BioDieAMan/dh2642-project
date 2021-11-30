import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTweets } from "../redux/actions/twitterActions";

const TwitterFeed = ({ getTweets, listOfTweets }) => {
  useEffect(() => {
    getTweets();
  }, []);
  return <div></div>;
};

const mapStateToProps = (state) => {
  return {
    listOfTweets: state.twitter.listOfTweets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTweets: () => dispatch(getTweets()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TwitterFeed);
