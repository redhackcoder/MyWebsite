import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Travel Website</div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/trip">Trips</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
