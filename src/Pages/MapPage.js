import React, { useState } from "react";
import CountryStatistics from "../components/CountryStatistics";
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import ReactTooltip from "react-tooltip";
import { Typography, Container } from "@mui/material";


const MapPage = () => {
  const [tooltip, setTooltip] = useState("");
  return (
    <Container>
      <Navbar />
      <Container>
        <CountryStatistics />
        <Container>
          <Map setTooltip={setTooltip} />
          <ReactTooltip>{tooltip}</ReactTooltip>
        </Container>
      </Container>
    </Container>
  );
};

export default MapPage;
