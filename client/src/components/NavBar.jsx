import React from 'react';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img className="logo-image" src='/public/logo.png' width='70px' />
                <h1 className="logo-title">Weirdiest Accessories</h1>
            </div>

            
            <ul className="menu">
                <input type='text' placeholder='Search for anyitems...'/>
                <li className="section">
                    <a href="#" className="navbar-link">Home</a>
                </li>
                <li className="section">
                    <a href="#" className="navbar-link">Category</a>
                </li>
                <li className="section">
                    <a href="#" className="navbar-link">About Project</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
