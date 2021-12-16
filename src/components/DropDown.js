/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getCurrentData,
  getMonthlyData,
  getSixMonthData,
  getListOfCountries,
  setCountry,
} from "../redux/actions/countryActions";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { Container, CircularProgress } from "@mui/material";

const DropDown = ({
  countries,
  getListOfCountries,
  getCurrentData,
  getMonthlyData,
  getSixMonthData,
  setCountry,
}) => {
  useEffect(() => {
    getListOfCountries();
  }, []);
  return (
    <Container>
      {!countries ? (
        <CircularProgress />
      ) : (
        <FormControl sx={{ minWidth: 200, maxWidth: 200 }}>
          <InputLabel id="select-country">Select Country</InputLabel>
          <Select
            id="dropdown"
            label="Select Country"
            onChange={(event) => {
              setCountry(event.target.value);
              getCurrentData(event.target.value);
              getMonthlyData(event.target.value);
              getSixMonthData(event.target.value);
            }}
          >
            <MenuItem hidden></MenuItem>
            {Object.entries(countries).map((c) => (
              <MenuItem key={c[1]} value={c[0]}>
                {c[1]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    countries: state.country.listOfCountries,
    currentCountry: state.country.currentCountry,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getListOfCountries: () => dispatch(getListOfCountries()),
    setCountry: (country) => dispatch(setCountry(country)),
    getCurrentData: (country) => dispatch(getCurrentData(country)),
    getMonthlyData: (country) => dispatch(getMonthlyData(country)),
    getSixMonthData: (country) => dispatch(getSixMonthData(country)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
