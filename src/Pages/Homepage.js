import React from "react";
import GlobalStatistics from "../components/GlobalStatistics";
import GlobalNewsFeed from "../components/newsComponents/GlobalNewsFeed";
import { Container } from "@mui/material";

const Homepage = () => {
  return (
    <Container>
      <GlobalStatistics />
      <GlobalNewsFeed />
    </Container>
  );
};

export default Homepage;
