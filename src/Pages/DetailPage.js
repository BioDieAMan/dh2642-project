import React from "react";
import LineChart from "../components/LineChart";
import LocalNewsFeed from "../components/newsComponents/LocalNewsFeed";
import DropDown from "../components/DropDown";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";
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
      <LineChart />
    </Container>
  );
};

export default DetailPage;
