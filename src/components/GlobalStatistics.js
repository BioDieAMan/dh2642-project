import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getGlobalData } from '../redux/actions/globalDataActions';
const GlobalStatistics = ({
    data,
    loading,
    getGlobalData
}) => {
    useEffect(() => {
        getGlobalData()
    }, [])

    return (
        <div>
            {loading ? <div>loading...</div>
                : data ? < div >
                    <li>Total confirmed cases: {data.confirmed}</li>
                    <li>Increase in cases since yesterday: {data.confirmed_diff}</li>
                    <li>Total confirmed deaths: {data.deaths}</li>
                    <li>Increase in deaths since yesterday: {data.deaths_diff}</li>
                </div >
                    : <div></div>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.globalData.globalData,
        loading: state.globalData.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getGlobalData: () => dispatch(getGlobalData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalStatistics)

