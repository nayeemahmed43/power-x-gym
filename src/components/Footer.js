import React from 'react';
import yt from "../images/bxl-youtube.png";
import fb from "../images/bxl-facebook.png";
import insta from "../images/bxl-instagram.png";
import twitter from "../images/bxl-twitter.png";
import wapp from "../images/bxl-whatsapp.png";

const Footer = () => {
    return (
        <div>
            <footer>
                <h3>POWER <span id="name">X</span></h3>

                <div className="help">
                    <p style={{marginRight:"50px"}}>Need Help?</p>
                    <div class="footer-link">
                        <p>Help Center</p>
                        <p>Email Support</p>
                        <p>Live Chat</p>
                        <p>Gift Certificates</p>
                        <p>Send Us feedback</p>
                    </div>
                </div>

                <div className="resource">
                    <p>Digital Resources</p>
                    <div class="resource-link">
                        <p>Articles</p>
                        <p>E-books</p>
                    </div>
                </div>
                
                <div className="social-link">
                    <p>Connect with Us</p>
                    <img src={yt} alt=""/>
                    <img src={fb} alt=""/>
                    <img src={insta} alt=""/>
                    <img src={twitter} alt=""/>
                    <img src={wapp} alt=""/>
                </div>

                <div className="news">
                    <p style={{marginRight:"100px"}}>Join Our Newsletter</p>
                    <div class="news-link">
                        <p>Get exclusive news features, and </p>
                        <p>updates from The Shredder Weight </p>
                        <p>Loss Academy</p>
                    </div>
                </div><br/>

                
            </footer>

        </div>
    );
};

export default Footer;