import React from 'react'
import LocalNewsFeed from '../components/LocalNewsFeed';
import MonthlyDataTest from '../components/MonthlyDataTest';
import MonthlyStatistics from '../components/MonthlyStatistics';

const DetailPage = () => {
    return (
        <div>
            <MonthlyDataTest />
            <MonthlyStatistics />
            <LocalNewsFeed />
        </div>
    )
}

export default DetailPage
