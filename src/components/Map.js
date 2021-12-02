import React, { useEffect } from 'react';
import {
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";
import { getCurrentData, getMonthlyData, getSixMonthData, setCountry, getListOfCountries } from '../redux/actions/countryActions';
import { connect } from "react-redux"

const Map = ({
    setCountry,
    getCurrentData,
    getMonthlyData,
    getSixMonthData,
    setTooltip,
    getListOfCountries,
    countries
}) => {

    useEffect(() => {
        if (countries)
            return
        getListOfCountries()
    }, [])

    const geograpgyUrl =
        "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

    return (
        <ComposableMap data-tip="" projectionConfig={{ scale: 150 }}>
            <Geographies geography={geograpgyUrl}>
                {({ geographies }) =>
                    geographies.map(g => (
                        <Geography
                            className="map-country"
                            key={g.rsmKey}
                            geography={g}
                            onMouseEnter={() => {
                                const { NAME } = g.properties
                                setTooltip(NAME)
                            }}
                            onMouseLeave={() => {
                                setTooltip("")
                            }}
                            onClick={() => {
                                const { ISO_A3 } = g.properties
                                setCountry(ISO_A3)
                                getCurrentData(ISO_A3)
                                getMonthlyData(ISO_A3)
                                getSixMonthData(ISO_A3)
                            }}
                        />
                    ))}
            </Geographies>
        </ComposableMap>

    )
}
const mapStateToProps = state => {
    return {
        currentCountry: state.country.currentCountry,
        currentData: state.country.currentData,
        countries: state.country.listOfCountries
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCurrentData: (country) => dispatch(getCurrentData(country)),
        getMonthlyData: (country) => dispatch(getMonthlyData(country)),
        getSixMonthData: (country) => dispatch(getSixMonthData(country)),
        setCountry: (country) => dispatch(setCountry(country)),
        getListOfCountries: () => dispatch(getListOfCountries())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
