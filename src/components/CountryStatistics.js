import React from "react";
import { connect } from "react-redux";
import { Typography, Container } from "@mui/material";

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
            <div>loading...</div>
          ) : currentData[currentCountry] ? (
            <div>
              Total confirmed cases: {currentData[currentCountry].confirmed}
            </div>
          ) : (
            <div>No data for this country</div>
          )}
        </Container>
      ) : (
        <div></div>
      )}
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
