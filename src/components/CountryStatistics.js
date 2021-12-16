/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  Container,
  CircularProgress,
  Card,
  CardContent,
  Typography,
  TableContainer,
  Table,
  TableRow,
  TableCell,
} from "@mui/material";
import millify from "millify";
import { getCurrentData } from "../redux/actions/countryActions";

const CountryStatistics = ({
  currentCountry,
  listOfCountries,
  loadingCurrent,
  currentData,
  getCurrentData,
  error,
}) => {
  useEffect(() => {
    if (!currentData[currentCountry]) getCurrentData(currentCountry);
  }, []);
  return (
    <Container>
      <Card
        sx={{ minHeight: 275, maxHeight: 800, minWidth: 400, maxWidth: 400 }}
      >
        <CardContent>
          {currentCountry ? (
            <Container align="left">
              <Typography variant="h5" align="center" gutterBottom>
                Current stats for{" "}
                {listOfCountries?.[currentCountry]
                  ? listOfCountries?.[currentCountry]
                  : currentCountry}
              </Typography>

              {loadingCurrent[currentCountry] ? (
                <CircularProgress />
              ) : currentData[currentCountry] ? (
                <Container align="left">
                  <TableContainer>
                    <Table size="small" sx={{ borderBottom: "none" }}>
                      <TableRow>
                        <TableCell sx={{ borderBottom: "none" }}>
                          Confirmed cases:
                        </TableCell>
                        <TableCell sx={{ borderBottom: "none" }}>
                          {isNaN(currentData[currentCountry].confirmed) ? currentData[currentCountry].confirmed : millify(currentData[currentCountry].confirmed)}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ borderBottom: "none" }}>
                          Increase in cases since yesterday:{" "}
                        </TableCell>
                        <TableCell sx={{ borderBottom: "none" }}>
                          {isNaN(currentData[currentCountry].confirmed_diff) ? currentData[currentCountry].confirmed_diff : millify(currentData[currentCountry].confirmed_diff)}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ borderBottom: "none" }}>
                          Total confirmed deaths:{" "}
                        </TableCell>
                        <TableCell sx={{ borderBottom: "none" }}>
                          {isNaN(currentData[currentCountry].deaths) ? currentData[currentCountry].deaths : millify(currentData[currentCountry].deaths)}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ borderBottom: "none" }}>
                          Increase in deaths since yesterday:{" "}
                        </TableCell>
                        <TableCell sx={{ borderBottom: "none" }}>
                          {currentData[currentCountry].deaths_diff}
                        </TableCell>
                      </TableRow>
                    </Table>
                  </TableContainer>
                </Container>
              ) : error ? (
                <div>
                  Could not fetch data for this country, try another one!
                </div>
              ) : (
                <div>No data for this country</div>
              )}
            </Container>
          ) : (
            <div></div>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    loadingCurrent: state.country.loadingCurrent,
    currentCountry: state.country.currentCountry,
    currentData: state.country.currentData,
    listOfCountries: state.country.listOfCountries,
    error: state.country.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentData: (country) => dispatch(getCurrentData(country)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CountryStatistics);