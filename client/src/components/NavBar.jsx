import React from 'react';
import { Link } from 'react-router-dom'; 
import AddItem from './AddItem';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img className="logo-image" src='/logo.png' width='70px' />
                <h1 className="logo-title">Weirdiest Accessories</h1>
            </div>

            
            <ul className="menu">
                <input type='text' placeholder='Search for any items...' />
                <li className="section">
                    <Link to="/">Home</Link>
                </li>
                <li className="section">
                    <Link to="/add-item">Add an accessory</Link>
                </li>
                <li className="section">
                    About Project
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
