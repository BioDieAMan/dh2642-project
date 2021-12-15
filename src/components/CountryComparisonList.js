/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getListOfCountries,
  addSelectedCountry,
  removeSelectedCountry,
} from "../redux/actions/countryActions";
import {
  Input,
  Box,
  List,
  ListItemText,
  ListItemButton,
  Container,
} from "@mui/material";

const CountryComparisonToggle = ({
  countries,
  getListOfCountries,
  selectedCountries,
  addSelectedCountry,
  removeSelectedCountry,
}) => {
  const [countryFilter, setCountryFilter] = useState("");

  useEffect(() => {
    getListOfCountries();
  }, []);
  return (
    <Container>
      <Box sx={{ width: "70%", maxWidth: 300, bgcolor: "background.paper" }}>
        <Input
          placeholder="Search for country..."
          onChange={(e) => setCountryFilter(e.target.value)}
        />
        <div className="scrollBar">
          {!countries ? (
            <List></List>
          ) : (
            <List>
              {Object.keys(countries).map((cKey) =>
                countryFilter === "" ? (
                  <ListItemButton
                    key={cKey}
                    selected={selectedCountries.some((scKey) => scKey === cKey)}
                    onClick={() =>
                      selectedCountries.some((scKey) => scKey === cKey)
                        ? removeSelectedCountry(cKey)
                        : addSelectedCountry(cKey)
                    }
                  >
                    <ListItemText>{countries[cKey]}</ListItemText>
                  </ListItemButton>
                ) : !countries[cKey]
                  .toLowerCase()
                  .includes(countryFilter.toLowerCase()) ? (
                  <span></span>
                ) : (
                  <ListItemButton
                    key={cKey}
                    selected={selectedCountries.some((scKey) => scKey === cKey)}
                    onClick={() =>
                      selectedCountries.some((scKey) => scKey === cKey)
                        ? removeSelectedCountry(cKey)
                        : addSelectedCountry(cKey)
                    }
                  >
                    <ListItemText>{countries[cKey]}</ListItemText>
                  </ListItemButton>
                )
              )}
            </List>
          )}
        </div>
      </Box>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: state.country.listOfCountries,
    selectedCountries: state.country.selectedCountries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getListOfCountries: () => dispatch(getListOfCountries()),
    addSelectedCountry: (country) => dispatch(addSelectedCountry(country)),
    removeSelectedCountry: (country) =>
      dispatch(removeSelectedCountry(country)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryComparisonToggle);
