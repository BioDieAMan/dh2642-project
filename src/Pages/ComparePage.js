import React from "react";
import CountryComparisonList from "../components/CountryComparisonList";
import CountryComparisonTable from "../components/CountryComparisonTable";
import Navbar from "../components/Navbar";
import LineChart from "../components/LineChart";
import { Container, Grid } from "@mui/material";

const ComparePage = () => {
  return (
    <Container>
      <Navbar />
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <CountryComparisonList />
        </Grid>
        <Grid item xs={9}>
          <CountryComparisonTable />
        </Grid>
      </Grid>
      {/* <LineChart /> */}
    </Container>
  );
};

export default ComparePage;
