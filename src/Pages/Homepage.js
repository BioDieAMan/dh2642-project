import React from "react";
import GlobalStatistics from "../components/GlobalStatistics";
import GlobalNewsFeed from "../components/newsComponents/GlobalNewsFeed";
import { Container } from "@mui/material";
import Watchlist from "../components/Watchlist";

const Homepage = () => {
  return (
    <Container>
      <GlobalStatistics />
      <Watchlist />
      <GlobalNewsFeed />
    </Container>
  );
};

export default Homepage;
