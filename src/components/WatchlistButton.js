/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { connect } from "react-redux";
import { Button } from "@mui/material";
import {
    addToWatchlist,
    removeFromWatchlist,
} from "../redux/actions/watchlistActions";

const WatchlistButton = ({
    loggedIn,
    addToWatchlist,
    removeFromWatchlist,
    watchlist,
    currentCountry,
}) => {
    if (!loggedIn) {
        return null;
    }
    return watchlist.filter((wKey) => wKey === currentCountry).length > 0 ? (
        <Button
            sx={{ height: "60px", width: "200px", margin: "auto" }}
            variant="outlined"
            onClick={() => removeFromWatchlist(currentCountry)}
        >
            Remove from watchlist
        </Button>
    ) : (
        <Button
            sx={{ height: "60px", width: "200px", margin: "auto" }}
            variant="contained"
            onClick={() => addToWatchlist(currentCountry)}
        >
            Add to watchlist
        </Button>
    );
};

const mapStateToProps = (state) => {
    return {
        watchlist: state.watchlist.watchlist,
        currentCountry: state.country.currentCountry,
        loggedIn: !state.firebase.auth.isEmpty,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToWatchlist: (country) => dispatch(addToWatchlist(country)),
        removeFromWatchlist: (country) => dispatch(removeFromWatchlist(country)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WatchlistButton);
