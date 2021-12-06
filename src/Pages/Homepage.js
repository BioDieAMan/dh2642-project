import React from "react";
import GlobalStatistics from "../components/GlobalStatistics";
import GlobalNewsFeed from "../components/newsComponents/GlobalNewsFeed";
import TwitterFeed from "../components/TwitterFeed";
import Navbar from "../components/Navbar";
import Signup from "../components/Signup";
import Signin from "../components/Signin";
import { Container } from "@mui/material";

const Homepage = () => {
  return (
    <Container>
      <Navbar />
      <GlobalStatistics />
      <GlobalNewsFeed />
      <TwitterFeed />
      <Signin />
      <Signup />
    </Container>
  );
};

export default Homepage;
