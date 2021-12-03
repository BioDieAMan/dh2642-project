import React from "react";
import GlobalStatistics from "../components/GlobalStatistics";
import GlobalNewsFeed from "../components/newsComponents/GlobalNewsFeed";
import TwitterFeed from "../components/TwitterFeed";
import Navbar from "../components/Navbar";
import Signup from "../components/Signup";
import Signin from "../components/Signin";

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <GlobalStatistics />
            <GlobalNewsFeed />
            <TwitterFeed />
            <Signin />
            <Signup />
        </div>
    );
};

export default Homepage;
