import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/details">Details</Link>
            <Link to="/compare">Compare</Link>
            <Link to="/map">Map</Link>
        </div>
    )
}

export default Navbar
