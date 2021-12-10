import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCurrentData, getListOfCountries } from '../redux/actions/countryActions'
import { CircularProgress } from '@mui/material'

const Watchlist = ({
    uid,
    watchlist,
    currentData,
    listOfCountries,
    getListOfCountries,
    getCurrentData,
    loadingCurrent
}) => {
    useEffect(() => {
        !listOfCountries && getListOfCountries();
        watchlist.forEach(country => getCurrentData(country))
    }, []);

    if (!uid) {
        return (
            <div>Log in to add countries to your watchlist and display them on the homepage</div>
        )
    }

    return (
        !listOfCountries?
            <div></div>:
            !watchlist?
                <div></div>:
                <div>
                    {watchlist.map(country => (
                        <div>
                            {listOfCountries[country]}<br />
                            {/* {loadingCurrent ? <CircularProgress /> : currentData[country].deaths} */}
                        </div>
                    ))}
                    <Link to="/account">Modify watchlist</Link>
                </div>
    )
}

const mapStateToProps = (state) => {
    return {
        uid: state.firebase.auth.uid,
        watchlist: state.watchlist.watchlist,
        currentData: state.country.currentData,
        listOfCountries: state.country.listOfCountries,
        loadingCurrent: state.country.loadingCurrent
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getListOfCountries: () => dispatch(getListOfCountries()),
        getCurrentData: (country) => dispatch(getCurrentData(country))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);

