import React, { useEffect, useState } from "react";
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

const DetailPage = ({
  loggedIn,
  currentCountry,
  setCountry,
}) => {
  const [tooltip, setTooltip] = useState();

  if (!currentCountry) {
    return (
      <Container  >
        <Container sx={{ width: "70%", float: "left" }}>
          <div className="flex-container">
            <DropDown
              style={{
                display: "flex",
                alignItems: "Left",
                maxWidth: "200px"
              }}
            />
            <Typography variant="h6" align="center">Click on a country to see detailed information about it. If you can not find it on the map, use the dropdown menu.</Typography>
          </div>
        </Container>
        <Container>
          <Map setTooltip={setTooltip} />
          <ReactTooltip>{tooltip}</ReactTooltip>
        </Container>
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
        {loggedIn && <WatchlistButton />}
      </div>
      <LineChart />
      <LocalNewsFeed />
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    currentCountry: state.country.currentCountry,
    loggedIn: !state.firebase.auth.isEmpty
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCountry: (country) => dispatch(setCountry(country))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
