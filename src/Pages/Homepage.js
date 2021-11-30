import React from "react";
import GlobalStatistics from "../components/GlobalStatistics";
import TwitterFeed from "../components/TwitterFeed";

const Homepage = () => {
  return (
    <div>
      <h1>Covindex</h1>
      <GlobalStatistics />
      <TwitterFeed />
    </div>
  );
};

export default Homepage;
