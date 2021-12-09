import React from "react";
import LineChart from "../components/LineChart";
import LocalNewsFeed from "../components/newsComponents/LocalNewsFeed";
import DropDown from "../components/DropDown";
import { Container } from "@mui/material";
import CountryStatistics from "../components/CountryStatistics";
//import DropDownMaterial from "../components/DropDownMaterial";

const DetailPage = () => {
  return (
    <Container>
      <DropDown
        style={{
          display: "flex",
          alignItems: "Left",
        }}
      />
      <DropDown
        style={{
          display: "flex",
          alignItems: "Left",
        }}
      />
      <CountryStatistics />
      <LineChart />
      <LocalNewsFeed />
    </Container>
  );
};

export default DetailPage;
