import React from "react";
import GlobalStatistics from "../components/GlobalStatistics";
import GlobalNewsFeed from "../components/newsComponents/GlobalNewsFeed";
import TwitterFeed from "../components/TwitterFeed";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";

const Homepage = () => {
    return (
        <div>
          <Container>
            <Navbar />
            <GlobalStatistics />
            <GlobalNewsFeed />
            <TwitterFeed />
          </Container>
        </div>
    );
};

export default Homepage;
