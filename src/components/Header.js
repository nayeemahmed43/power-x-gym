import React from 'react';

const Header = () => {
    return (
        <div className="header">
             <nav className="nav">
                    <h3>POWER <span id="name">X</span></h3>
                <div className="navItem">
                    <a href="/home"><h6>Home</h6></a>
                    <a href="/services"><h6>Services</h6></a>
                    <a href="/our_classes"><h6>Our Classes</h6></a>
                    <a href="/about_us"><h6>About Us</h6></a>
                    <a href="/blog"><h6>Blog</h6></a>
                    <a href="/pricing"><h6>Pricing</h6></a>
                    <a href="/contact_us"><h6>Contact Us</h6></a>
                </div>
            </nav>
            <div className="title">
                    <p>Our Classes</p>
                </div>
            
        </div>
    );
};

export default Header;