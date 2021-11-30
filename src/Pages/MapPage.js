import React from 'react';
import CountryStatistics from '../components/CountryStatistics';
import DropDown from '../components/DropDown';

const MapPage = () => {
    return (
        <div>
            <DropDown />
            <CountryStatistics />
        </div>
    )
}

export default MapPage
