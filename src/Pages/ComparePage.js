import React from "react";
import CountryComparisonList from "../components/CountryComparisonList";
import CountryComparisonTable from "../components/CountryComparisonTable";
import Navbar from "../components/Navbar";
import LineChart from "../components/LineChart";
import { Container } from "@mui/material";

const ComparePage = () => {
  return (
    <Container>
      <Navbar />
      <div className="leftContent">
        <CountryComparisonList />
      </div>
      <div className="mainContent">
        {/* <LineChart /> */}
        <CountryComparisonTable />
      </div>
    </Container>
  );
};

export default ComparePage;
