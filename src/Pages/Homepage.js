import React from "react";
import { Link } from "react-router-dom";
import GlobalStatistics from "../components/GlobalStatistics";
import GlobalNewsFeed from "../components/newsComponents/GlobalNewsFeed";
import TwitterFeed from "../components/TwitterFeed";
import Navbar from "../components/Navbar";
import { Typography, CssBaseline, Container } from "@mui/material";

const Homepage = () => {
  return (
    <Container>
      <Navbar />
      <GlobalStatistics />
      <GlobalNewsFeed />
      <TwitterFeed />
    </Container>
  );
};

export default Homepage;
