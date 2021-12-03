import React from "react";
import LineChart from "../components/LineChart";
import LocalNewsFeed from "../components/newsComponents/LocalNewsFeed";
import DropDown from "../components/DropDown";
import Navbar from "../components/Navbar";

const DetailPage = () => {
  return (
    <div>
      <Navbar />
      <DropDown />
      <LocalNewsFeed />
      <LineChart />
    </div>
  );
};

export default DetailPage;
