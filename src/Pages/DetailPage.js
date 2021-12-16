import React, { useState } from "react";
import LineChart from "../components/LineChart";
import LocalNewsFeed from "../components/newsComponents/LocalNewsFeed";
import DropDown from "../components/DropDown";
import { Container, Typography, Card, CardContent, Grid, Button } from "@mui/material";
import CountryStatistics from "../components/CountryStatistics";
import WatchlistButton from "../components/WatchlistButton";
import Map from "../components/Map";
import ReactTooltip from "react-tooltip";
import { connect } from "react-redux";
import { setCountry } from "../redux/actions/countryActions";

const DetailPage = ({ currentCountry, setCountry }) => {
  const [tooltip, setTooltip] = useState();

  if (!currentCountry) {
    return (
      <Container maxWidth="lg" alignitems="center" justifycontent="center">
        <Grid container spacing={2} direction="row" sx={{ pb: 2, p: 2 }}>
          <Grid item alignitems="center">
            <DropDown
              style={{
                display: "flex",
                alignitems: "Left",
              }}
            />
          </Grid>
          <Grid item>
            <Card>
              <CardContent>
                <Typography>
                  Click on a country to see detailed information about it. If
                  you can not find it on the map, use the dropdown menu.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Map setTooltip={setTooltip} />
          <ReactTooltip>{tooltip}</ReactTooltip>
        </Grid>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" align="center" justifycontent="center">
      <Grid container spacing={2} direction="row" sx={{ pb: 2, p: 2 }}>
        <Grid item xs={12} xl={6} align="center" justifycontent="center">
          <Button
            sx={{ height: "60px", width: "200px", margin: "auto" }}
            variant="contained"
            onClick={() => setCountry("")}
          >
            Choose another country
          </Button>
        </Grid>
        <Grid item xs={12} xl={6} align="center" justifycontent="center">
          <WatchlistButton />
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        lg={12}
        align="center"
        justifycontent="center"
        sx={{ pb: 2, p: 2 }}
      >
        <CountryStatistics />
      </Grid>
      <Grid item xs={12} xl={12} align="center">
        <LineChart />
      </Grid>
      <Grid item xs={12} xl={12} align="center">
        <LocalNewsFeed />
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    currentCountry: state.country.currentCountry,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCountry: (country) => dispatch(setCountry(country)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
