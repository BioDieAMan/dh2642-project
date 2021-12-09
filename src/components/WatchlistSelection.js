import React from 'react'
import { connect } from 'react-redux';

const WatchlistSelection = ({
    watchlist
}) => {
    return (
        <div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        watchlist: state.watchlist.watchlist
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WatchlistSelection);
