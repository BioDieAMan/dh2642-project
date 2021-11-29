import React from 'react'
import { Link } from 'react-router-dom'
import Counter from '../components/Counter'

const Homepage = () => {
    return (
        <div>
            <h1>Covindex</h1>
            <Link to="/counter">Counter</Link>
            <Counter />
        </div>
    )
}


export default Homepage
