import React from "react";
import LineChart from "../components/LineChart";
import LocalNewsFeed from "../components/newsComponents/LocalNewsFeed";
import DropDown from "../components/DropDown";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";
import CountryStatistics from "../components/CountryStatistics";
//import DropDownMaterial from "../components/DropDownMaterial";

const DetailPage = () => {
  return (
    <Container>
      <Navbar />
      <DropDown
        style={{
          display: "flex",
          alignItems: "Left",
        }}
      />
      <LocalNewsFeed />
      <CountryStatistics />
      <LineChart />
    </Container>
  );
};

export default DetailPage;
