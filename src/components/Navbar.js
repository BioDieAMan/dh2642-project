import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/details">Details</Link>
            <Link to="/counter">Counter</Link>
        </div>
    )
}

export default Navbar
