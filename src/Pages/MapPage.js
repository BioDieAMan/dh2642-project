import React from "react";
import CountryStatistics from "../components/CountryStatistics";
import DropDown from "../components/DropDown";
import Navbar from "../components/Navbar";

const MapPage = () => {
  return (
    <div>
      <Navbar />
      <DropDown />
      <CountryStatistics />
    </div>
  );
};

export default MapPage;
