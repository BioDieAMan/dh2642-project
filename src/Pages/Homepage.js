import React from "react";
import { Link } from "react-router-dom";
import GlobalStatistics from "../components/GlobalStatistics";
import GlobalNewsFeed from "../components/GlobalNewsFeed";
import TwitterFeed from "../components/TwitterFeed";
import Navbar from "../components/Navbar";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <GlobalStatistics />
      <GlobalNewsFeed />
      <TwitterFeed />
    </div>
  );
};

export default Homepage;
