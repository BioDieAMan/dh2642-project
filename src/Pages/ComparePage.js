import React from 'react'
import CountryComparisonList from '../components/CountryComparisonList';
import CountryComparisonTable from '../components/CountryComparisonTable';
import Navbar from "../components/Navbar";
import LineChart from "../components/LineChart";

const ComparePage = () => {
    return (
        <div className="container">
            <Navbar />
            <div className="leftContent">
                <CountryComparisonList />
            </div>
            <div className="mainContent">
                {/* <LineChart /> */}
                <CountryComparisonTable />
            </div>
            
            
        </div>
    )
}

export default ComparePage