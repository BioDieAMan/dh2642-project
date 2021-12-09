import React from "react";
import CountryComparisonList from "../components/CountryComparisonList";
import CountryComparisonTable from "../components/CountryComparisonTable";
import LineChart from "../components/LineChart";
import { Container, Grid } from "@mui/material";

const ComparePage = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <CountryComparisonList />
      </Grid>
      <Grid item xs={8}>
        <CountryComparisonTable />
      </Grid>
    </Grid>
  );
};

export default ComparePage;
