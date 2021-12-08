import React from "react";
import { connect } from "react-redux";
import { Typography, Container, CircularProgress } from "@mui/material";

const CountryStatistics = ({
  currentCountry,
  listOfCountries,
  loadingCurrent,
  currentData,
}) => {

  return (
    <Container>
      {currentCountry ? (
        <Container style={{ textAlign: "center" }}>
          <h3>Current stats for {listOfCountries[currentCountry]}</h3>{" "}
          {loadingCurrent ? (
            <CircularProgress />
          ) : currentData[currentCountry] ? (
            <div>
              Total confirmed cases: {currentData[currentCountry].confirmed}<br />
              Increase in cases since yesterday: {currentData[currentCountry].confirmed_diff}<br />
              Total confirmed deaths: {currentData[currentCountry].deaths}<br />
              Increase in deaths since yesterday: {currentData[currentCountry].deaths_diff}<br />
            </div>
          ) : (
            <div>No data for this country</div>
          )}
        </Container>
      ) : (
        <Container style={{ textAlign: "center" }}>
          <div>Choose a country to see the current status</div>
        </Container>)}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    loadingCurrent: state.country.loadingCurrent,
    currentCountry: state.country.currentCountry,
    currentData: state.country.currentData,
    listOfCountries: state.country.listOfCountries,
  };
};

export default connect(mapStateToProps)(CountryStatistics);
