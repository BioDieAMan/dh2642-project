import React, { useState } from "react";
import CountryStatistics from "../components/CountryStatistics";
import Map from "../components/Map";
import ReactTooltip from "react-tooltip";
import { Typography, Container } from "@mui/material";
import Navbar from "../components/Navbar";

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
        <Container style={{ textAlign: "center" }}>
          <Typography
            variant="h7"
            textAlign="center"
            color="textPrimary"
            gutterBottom
          >
            Click a country to see current information about the situation
          </Typography>
        </Container>
      </Container>
    </Container>
  );
};

export default MapPage;
