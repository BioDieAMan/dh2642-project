/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Grid, Container, Paper, List, ListItem, ListItemIcon, ListItemText, Button, Checkbox } from '@mui/material';
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
    watchlist
}) => {
    useEffect(() => {
        if (countries) return;
        getListOfCountries();
    }, []);

    const [checked, setChecked] = React.useState([]);
    const [left, setLeft] = React.useState(Object.keys(countries).filter(cKey => cKey !== watchlist));
    const [right, setRight] = React.useState(watchlist);

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
                {items.map((value) => {
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

    return (
        <Grid container spacing={10} justifyContent="center" alignItems="center">
            {/* Non Selected Country List */}

            <Grid item>{customList(left)}</Grid>

            {/* Buttons */}
            <Grid item>
                <Grid container direction="column" alignItems="center">
                    <Button sx={{ my: 0.5 }} variant="outlined" size="small"
                        onClick={handleCheckedRight} disabled={leftChecked.length === 0} aria-label="move selected right"
                    >
                        &gt;
                    </Button>

                    <Button sx={{ my: 0.5 }} variant="outlined" size="small"
                        onClick={handleCheckedLeft} disabled={rightChecked.length === 0} aria-label="move selected left"
                    >
                        &lt;
                    </Button>

                    <Button sx={{ my: 0.5 }} variant="outlined" size="small"
                        onClick={handleAllLeft} disabled={right.length === 0} aria-label="move all left"
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
            <Grid item>{customList(right)}</Grid>
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        countries: state.country.listOfCountries,
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
