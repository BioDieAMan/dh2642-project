import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div>
            <h1>Covindex</h1>
            <Link to="/counter">Counter</Link>
        </div>
    )
}


export default Homepage
