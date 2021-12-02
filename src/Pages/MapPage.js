import React, { useState } from 'react';
import CountryStatistics from '../components/CountryStatistics';
import Map from '../components/Map';
import ReactTooltip from "react-tooltip"

const MapPage = () => {
    const [tooltip, setTooltip] = useState("")
    return (
        <div>
            <div className="flex-container">
                <h1>Click a country to see current information about the situation</h1>
                <CountryStatistics />
            </div>
            <Map setTooltip={setTooltip} />
            <ReactTooltip>{tooltip}</ReactTooltip>
        </div>
    )
}

export default MapPage
