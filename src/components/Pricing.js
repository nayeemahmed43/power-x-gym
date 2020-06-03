import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Pricing = () => {
    return (
        <div className="pricing">
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
                    <p>PRICING PLANS</p>
                </div>
            
        </div>
            <h3 id="title"><span style={{color:"#E5B836"}}>CHOOSE THE OFFER</span> THAT SUITS YOU</h3>
            <p id="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. e necessitatibus recusandae! Vitae deserunt esse vel magni voluptatibus amet in?</p>
        
            <div className="row" style={{justifyContent:"center"}}>

                <div className="priceBox" id="priceBox1">
                    <p>BILLED MONTHLY</p>
                    <h3>ADVANCED PLAN</h3>
                    <p>$140</p>
                    <div className="pricingPoint">
                        <p>Mobile-Optimized</p>
                        <p>Best Hosting</p>
                        <p>Free Custom</p>
                        <p>Outstanding</p>
                        <p>Happy Customers</p>
                    </div>
                    <button>Purchase</button>
                </div>

                <div className="priceBox" id="priceBox2">
                     <p>BILLED MONTHLY</p>
                    <h3>Basic PLAN</h3>
                    <p>$120</p>
                    <div className="pricingPoint">
                        <p>Mobile-Optimized</p>
                        <p>Best Hosting</p>
                        <p>Free Custom</p>
                        <p>Outstanding</p>
                        <p>Happy Customers</p>
                    </div>
                    <button>Purchase</button>
                </div>

                <div className="priceBox" id="priceBox3">
                     <p>BILLED MONTHLY</p>
                    <h3>Biginners</h3>
                    <p>$90</p>
                    <div className="pricingPoint">
                        <p>Mobile-Optimized</p>
                        <p>Best Hosting</p>
                        <p>Free Custom</p>
                        <p>Outstanding</p>
                        <p>Happy Customers</p>
                    </div>
                    <button>Purchase</button>
                </div>
            </div>

        <Footer></Footer>
        </div>
    );
};

export default Pricing;