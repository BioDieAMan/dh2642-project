import React from "react";
import { connect } from "react-redux";
import { Container, CircularProgress } from "@mui/material";
import millify from "millify";

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
              Total confirmed cases:{" "}
              {millify(currentData[currentCountry].confirmed)}
              <br />
              Increase in cases since yesterday:{" "}
              {millify(currentData[currentCountry].confirmed_diff)}
              <br />
              Total confirmed deaths:{" "}
              {millify(currentData[currentCountry].deaths)}
              <br />
              Increase in deaths since yesterday:{" "}
              {currentData[currentCountry].deaths_diff}
              <br />
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
