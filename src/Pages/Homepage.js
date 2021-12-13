import React from "react";
import GlobalStatistics from "../components/GlobalStatistics";
import GlobalNewsFeed from "../components/newsComponents/GlobalNewsFeed";
import { Container } from "@mui/material";
import Watchlist from "../components/Watchlist";

const Homepage = () => {
  return (
    <Container>
      <div className="flex-container">
        <GlobalStatistics />
        <Watchlist />
      </div>
      <GlobalNewsFeed />
    </Container>
  );
};

export default Homepage;
