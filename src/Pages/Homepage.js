import React from "react";
import GlobalStatistics from "../components/GlobalStatistics";
import GlobalNewsFeed from "../components/newsComponents/GlobalNewsFeed";
import { Container, Grid } from "@mui/material";
import Watchlist from "../components/Watchlist";

const Homepage = () => {
  return (
    <Container maxWidth="xl" alignItems="center" justifyContent="center">
      <Grid container spacing={2} direction="row" sx={{ pb: 2, p: 2 }}>
        <Grid item xs={12} lg={6} align="center">
          <GlobalStatistics />
        </Grid>
        <Grid item xs={12} lg={6} align="center">
          <Watchlist />
        </Grid>
      </Grid>
      <Grid item xs={12} lg={12} align="center">
        <GlobalNewsFeed />
      </Grid>
    </Container>
  );
};

export default Homepage;
