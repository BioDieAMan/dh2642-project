import React from "react";
import CountryComparisonList from "../components/CountryComparisonList";
import CountryComparisonTable from "../components/CountryComparisonTable";
import { Grid, Container } from "@mui/material";

const ComparePage = () => {
  return (
    <Container maxWidth="xl" alignItems="center" justifyContent="center">
      <Grid container spacing={2} direction="row" sx={{ pb: 2, p: 8 }}>
        <Grid item xs={4} xl={3} align="center">
          <CountryComparisonList />
        </Grid>
        <Grid item xs={8} xl={9} align="center">
          <CountryComparisonTable />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ComparePage;
