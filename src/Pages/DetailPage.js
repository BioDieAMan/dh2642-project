import React, { useState } from "react";
import LineChart from "../components/LineChart";
import LocalNewsFeed from "../components/newsComponents/LocalNewsFeed";
import DropDown from "../components/DropDown";
import { Button, Container, Typography } from "@mui/material";
import CountryStatistics from "../components/CountryStatistics";
import WatchlistButton from "../components/WatchlistButton";
import Map from "../components/Map";
import ReactTooltip from "react-tooltip";
import { connect } from "react-redux"
import { setCountry } from "../redux/actions/countryActions";

//import DropDownMaterial from "../components/DropDownMaterial";

const DetailPage = ({
  currentCountry,
  setCountry,
}) => {
  const [tooltip, setTooltip] = useState("");

  if (!currentCountry) {
    return (
      <Container >
        <Container>
          <Map setTooltip={setTooltip} />
          <ReactTooltip>{tooltip}</ReactTooltip>
        </Container>
        <DropDown
          style={{
            display: "flex",
            alignItems: "Left",
          }}
        />
      </Container>
    )
  }

  return (
    <Container>
      <div className="flex-container">
        <Button
          sx={{ height: "60px", margin: "auto" }}
          variant="contained"
          onClick={() => setCountry("")}>
          Choose a different country
        </Button>
        <CountryStatistics />
        <WatchlistButton />
      </div>
      <LineChart />
      <LocalNewsFeed />
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    currentCountry: state.country.currentCountry
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCountry: (country) => dispatch(setCountry(country))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
