/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentData, setCountry } from "../redux/actions/countryActions";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CircularProgress,
  Container,
  Table,
  TableCell,
  TableRow,
  TableContainer,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import millify from "millify";

const Watchlist = ({
  uid,
  watchlist,
  currentData,
  listOfCountries,
  getCurrentData,
  setCountry,
  loadingCurrent,
}) => {
  useEffect(() => {
    watchlist.forEach((country) => getCurrentData(country));
  }, [watchlist]);

  if (!uid) {
    return (
      <Card
        sx={{ minHeight: 400, maxHeight: 800, minWidth: 400, maxWidth: 400 }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            <Link to="/account">Sign in</Link> to add countries to your
            watchlist and display them on the homepage
          </Typography>
        </CardContent>
      </Card>
    );
  }

  if (watchlist === undefined || watchlist.length <= 0) {
    return (
      <Card
        sx={{ minHeight: 400, maxHeight: 800, minWidth: 400, maxWidth: 400 }}
      >
        <CardActions>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              Watchlist is currently empty. You can add countries to your
              watchlist by pressing <Link to="/account">here</Link> or by going
              to "My Account" under your profile.
            </Typography>
          </CardContent>
        </CardActions>
      </Card>
    );
  }

  return (
    <div>
      {!listOfCountries || !watchlist ? (
        <div></div>
      ) : (
        <Container>
          <Carousel
            stopAutoPlayOnHover={true}
            interval={5000}
            animation={"slide"}
            navButtonsAlwaysVisible={true}
            indicatorIconButtonProps={{
              style: {
                padding: "10px", // 1
                margin: "10 10 0 0", // 3
              },
            }}
            navButtonsProps={{
              style: {
                backgroundColor: "#6271a3",
                opacity: 0.2,
                margin: "0 10px",
              },
            }}
          >
            {watchlist.map((wKey) => {
              return (
                <Container>
                  <Card
                    key={wKey}
                    sx={{
                      minHeight: 275,
                      maxHeight: 400,
                      minWidth: 400,
                      maxWidth: 400,
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5" align="center" gutterBottom>
                        {listOfCountries[wKey]}
                      </Typography>

                      <Container align="left">
                        <TableContainer>
                          <Table size="small" sx={{ borderBottom: "none" }}>
                            <TableRow>
                              <TableCell sx={{ borderBottom: "none" }}>
                                Confirmed cases:
                              </TableCell>
                              <TableCell sx={{ borderBottom: "none" }}>
                                {loadingCurrent[wKey] ? (
                                  <CircularProgress />
                                ) : !currentData[wKey] ? (
                                  "No data"
                                ) : (
                                  millify(currentData[wKey].confirmed)
                                )}
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ borderBottom: "none" }}>
                                Vaccinated:{" "}
                              </TableCell>
                              <TableCell sx={{ borderBottom: "none" }}>
                                {loadingCurrent[wKey] ? (
                                  <CircularProgress />
                                ) : !currentData[wKey] ? (
                                  "No data"
                                ) : (
                                  millify(currentData[wKey].vaccinated)
                                )}
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell sx={{ borderBottom: "none" }}>
                                Deaths:{" "}
                              </TableCell>
                              <TableCell sx={{ borderBottom: "none" }}>
                                {loadingCurrent[wKey] ? (
                                  <CircularProgress />
                                ) : !currentData[wKey] ? (
                                  "No data"
                                ) : (
                                  millify(currentData[wKey].deaths)
                                )}
                              </TableCell>
                            </TableRow>
                          </Table>
                        </TableContainer>
                      </Container>
                      <CardActions>
                        <Container align="center" justify="center">
                          <Button
                            size="small"
                            component={Link}
                            to="/details"
                            onClick={() => setCountry(wKey)}
                          >
                            Learn More
                          </Button>
                          <Button
                            size="small"
                            component={Link}
                            to="/account"
                            onClick={() => setCountry(wKey)}
                          >
                            Modify watchlist
                          </Button>
                        </Container>
                      </CardActions>
                    </CardContent>
                  </Card>
                </Container>
              );
            })}
          </Carousel>
        </Container>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
    watchlist: state.watchlist.watchlist,
    currentData: state.country.currentData,
    listOfCountries: state.country.listOfCountries,
    loadingCurrent: state.country.loadingCurrent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentData: (country) => dispatch(getCurrentData(country)),
    setCountry: (country) => dispatch(setCountry(country)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);
