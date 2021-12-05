import React from 'react'
import CountryComparisonToggle from '../components/CountryComparisonToggle';
import CountryComparisonTable from '../components/CountryComparisonTable';
import Navbar from "../components/Navbar";
import LineChart from "../components/LineChart";

const ComparePage = () => {
    return (
        <div>
            <Navbar />
            {/* <LineChart /> */}
            <div>
                <div className='comparisonTable'>
                    <CountryComparisonTable />
                </div>
                <div className='comparisonToggle'>
                    <CountryComparisonToggle />
                </div>
            </div>
        </div>
    )
}

export default ComparePage