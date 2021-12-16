/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, CircularProgress } from "@mui/material";
import millify from "millify";
import { getCurrentData } from "../redux/actions/countryActions";

const CountryStatistics = ({
  currentCountry,
  listOfCountries,
  loadingCurrent,
  currentData,
  getCurrentData,
  error
}) => {
  useEffect(() => {
    if (!currentData[currentCountry])
      getCurrentData(currentCountry)
  }, [])
  return (
    <Container>
      {currentCountry ? (
        <Container style={{ textAlign: "center" }}>
          <h3>Current stats for {listOfCountries?.[currentCountry] ? listOfCountries?.[currentCountry] : currentCountry}</h3>{" "}
          {loadingCurrent[currentCountry] ? (
            <CircularProgress />
          ) : currentData[currentCountry] ? (
            <div>
              Total confirmed cases:{" "}
              {isNaN(currentData[currentCountry].confirmed) ? currentData[currentCountry].confirmed : millify(currentData[currentCountry].confirmed)}
              <br />
              Increase in cases since yesterday:{" "}
              {isNaN(currentData[currentCountry].confirmed_diff) ? currentData[currentCountry].confirmed_diff : millify(currentData[currentCountry].confirmed_diff)}
              <br />
              Total confirmed deaths:{" "}
              {isNaN(currentData[currentCountry].deaths) ? currentData[currentCountry].deaths : millify(currentData[currentCountry].deaths)}
              <br />
              Increase in deaths since yesterday:{" "}
              {currentData[currentCountry].deaths_diff}
              <br />
              Total vaccinations:{" "}
              {isNaN(currentData[currentCountry].vaccinated) ? currentData[currentCountry].vaccinated : millify(currentData[currentCountry].vaccinated)}
              <br />
              Percent of population vaccinated:{" "}
              {currentData[currentCountry].vaccinated_per_hundred}
              <br /><br />
              {currentData[currentCountry].last_update ? `Last updated: ${currentData[currentCountry].last_update}` : null}

            </div>
          ) : error ? <div>Could not fetch data for this country, try another one!</div>
            : (
              <div>No data for this country</div>
            )}
        </Container>
      )
        : (
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
    error: state.country.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCurrentData: country => dispatch(getCurrentData(country))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CountryStatistics);
