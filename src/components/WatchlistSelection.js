/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Grid, Paper, Typography, List, ListItem, ListItemIcon, ListItemText, Button, Checkbox, CircularProgress } from '@mui/material';
import { getListOfCountries } from "../redux/actions/countryActions";
import { populateWatchlist } from "../redux/actions/watchlistActions"

function not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
}

const WatchlistSelection = ({
    populateWatchlist,
    getListOfCountries,
    countries,
    loadingCountries,
    watchlist
}) => {
    useEffect(() => {
        getListOfCountries()
    }, [])
    useEffect(() => {
        setLeft(
            Object.keys(countries).filter(cKey => cKey !== watchlist)
        )
        setRight(watchlist)
    }, [countries, watchlist]);
    const [checked, setChecked] = useState([]);
    const [left, setLeft] = useState([]);
    const [right, setRight] = useState([]);

    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };

    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    };

    const handleAllLeft = () => {
        setLeft(left.concat(right));
        setRight([]);
    };

    const customList = (items) => (
        <Paper sx={{ width: "300px", height: "500px", overflow: 'auto' }}>
            <List dense component="div" role="list">
                {items?.map((value) => {
                    const labelId = `transfer-list-item-${value}-label`;

                    return (
                        <ListItem key={value} role="listitem" button onClick={handleToggle(value)}>
                            <ListItemIcon>
                                <Checkbox
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{
                                        'aria-labelledby': labelId,
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={countries[value]} />
                        </ListItem>
                    );
                })}
                <ListItem />
            </List>
        </Paper>
    );
    if (loadingCountries) {
        return (
            <CircularProgress />
        )
    }
    return (
        <Grid container spacing={10} justifyContent="center" alignItems="center">
            {/* Non Selected Country List */}

            <Grid item>
                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                    Countries
                </Typography>
                {customList(left)}
            </Grid>

            {/* Buttons */}
            <Grid item>
                <Grid container direction="column" alignItems="center">
                    <Button sx={{ my: 0.5 }} variant="outlined" size="small"
                        onClick={() => handleCheckedRight()} disabled={leftChecked.length === 0} aria-label="move selected right"
                    >
                        &gt;
                    </Button>

                    <Button sx={{ my: 0.5 }} variant="outlined" size="small"
                        onClick={() => handleCheckedLeft()} disabled={rightChecked.length === 0} aria-label="move selected left"
                    >
                        &lt;
                    </Button>

                    <Button sx={{ my: 0.5 }} variant="outlined" size="small"
                        onClick={() => handleAllLeft()} disabled={right.length === 0} aria-label="move all left"
                    >
                        ≪
                    </Button>
                    <Button sx={{ my: 0.5 }} variant="outlined" size="small"
                        onClick={() => populateWatchlist(right)} aria-label="Update"
                    >
                        Update Watchlist
                    </Button>
                </Grid>
            </Grid>

            {/* WatchList */}
            <Grid item>
                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                    Watchlist
                </Typography>
                {customList(right)}
            </Grid>
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        countries: state.country.listOfCountries,
        loadingCountries: state.country.loadingCountries,
        watchlist: state.watchlist.watchlist
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getListOfCountries: () => dispatch(getListOfCountries()),
        populateWatchlist: (countries) => dispatch(populateWatchlist(countries))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WatchlistSelection);
