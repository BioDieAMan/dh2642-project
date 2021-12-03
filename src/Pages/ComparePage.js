import React from 'react'
import CountryComparisonToggle from '../components/CountryComparisonToggle';
import CountryComparisonTable from '../components/CountryComparisonTable';
import Navbar from "../components/Navbar";
import LineChart from "../components/LineChart";

const ComparePage = () => {
    return (
        <div>
            <Navbar />
            {/* <LineChart />
            <LineChart />*/}
            <CountryComparisonTable />
            <CountryComparisonToggle />
        </div>
    )
}

export default ComparePage