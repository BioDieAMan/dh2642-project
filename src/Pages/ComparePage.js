import React from "react";
import CountryToggle from "../components/CountryToggle";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";

const ComparePage = () => {
  return (
    <Container>
      <Navbar />
      <CountryToggle />
    </Container>
  );
};

export default ComparePage;
