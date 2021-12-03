import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  setCountry,
  getCurrentData,
  getMonthlyData,
  getSixMonthData,
  getListOfCountries,
} from "../redux/actions/countryActions";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { Container } from "@mui/material";
import Box from "@mui/material/Box";

const DropDown = ({
  countries,
  getListOfCountries,
  getCurrentData,
  getMonthlyData,
  getSixMonthData,
  setCountry,
}) => {
  useEffect(() => {
    if (countries) return;
    getListOfCountries();
  }, []);
  return (
    <div>
      {!countries ? (
        <div></div>
      ) : (
        <Container>
          <Box sx={{ minWidth: 100 }}>
            <FormControl size="mediumd">
              <InputLabel id="select-country">Country</InputLabel>
              <Select
                id="dropdown"
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
          </Box>
        </Container>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: state.country.listOfCountries,
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
