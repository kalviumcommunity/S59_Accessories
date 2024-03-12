import React from 'react';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img className="logo-image" src='/logo.png' width='70px' />
                <h1 className="logo-title">Weirdiest Accessories</h1>
            </div>

            
            <ul className="menu">
                <input type='text' placeholder='Search for anyitems...'/>
                <li className="section">
                    Category
                </li>
                <li className="section">
                    About Project
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
