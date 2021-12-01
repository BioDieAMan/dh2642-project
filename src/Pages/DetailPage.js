import React from 'react'
import LineChart from '../components/LineChart';
import LocalNewsFeed from '../components/LocalNewsFeed';
import DropDown from '../components/DropDown';

const DetailPage = () => {
    return (
        <div>
            <DropDown />
            <LineChart />
            <LocalNewsFeed />
        </div>
    )
}

export default DetailPage
