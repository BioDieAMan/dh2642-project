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
      <LineChart />
      <LocalNewsFeed />
    </div>
  );
};

export default DetailPage;
