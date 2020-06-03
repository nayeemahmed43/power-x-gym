import React from 'react';
import Group80 from "../images/Group 80.png";
import Group81 from "../images/Group 81.png";
import Group82 from "../images/Group 82.png";
import Group87 from "../images/Group 87.png";
import Group88 from "../images/Group 88.png";
import gift from "../images/gift-2.png";
import wellsChan from "../images/wells-chan-H-vAxuWxmi8-unsplash.jpg";
import yt from "../images/bxl-youtube.png";
import fb from "../images/bxl-facebook.png";
import insta from "../images/bxl-instagram.png";
import twitter from "../images/bxl-twitter.png";
import wapp from "../images/bxl-whatsapp.png";

const Home = () => {
    return (
         <div className="home">

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
            <div>
                <div className="title">
                    <p>THE BEST FITNESS</p>
                    <p>STUDIO IN TOWN</p>
                </div>
                <p id="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, vitae neque? Expedita quae doloribus eum quisquam odit corrupti reiciendis vero.Sit ipsam ut eligendi reprehenderit, aliquam molestiae voluptatem, voluptate atque nemo culpa impedit cum tempore.</p>
                <button className="join-btn">JOIN US</button>  
            </div>

            <div className="category">
                <div className="category-box" id="category-box1">
                    <img src={Group80} alt="watch" style={{marginTop: "15%",marginBottom: "20px"}}/>
                    <h3>PROGRESSION</h3>
                    <small>Lorem, ipsum dolor sit amet consectetur adipisicing.<br/>facilis cupiditate voluptates. Doloribus atque aut consequuntur neque pariatur.</small>
                </div>
                <div className="category-box" id="category-box2">
                    <img src={Group81} alt="weight" style={{marginTop: "20%",marginBottom: "40px"}}/>
                    <h3>WORKOUT</h3>
                    <small>Lorem, ipsum dolor sit amet consectetur adipisicing.<br/>facilis cupiditate voluptates. Doloribus atque aut consequuntur neque pariatur.</small>
                </div>
                <div className="category-box" id="category-box3">
                    <img src={Group82} alt="pot" style={{marginTop: "20%",marginBottom: "20px"}}/>
                    <h3>NUTRITION</h3>
                    <small>Lorem, ipsum dolor sit amet consectetur adipisicing.<br/>facilis cupiditate voluptates. Doloribus atque aut consequuntur neque pariatur.</small>
                </div>
            </div>

            <div className="mid-section">
                <img src={wellsChan} alt="wells-chan" />
            </div>

            <div className="mid-content">
                <h3 style={{color:"#E5B836"}}>WE ARE HERE TO DREAM!</h3>
                <h3>OUR TEAM IS HERE TO SERVE YOU.</h3>
                <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta <br/>voluptatum corporis, est corrupti labore neque quo sunt quasi <br/>tempore aspernatur nobis dignissimos modi eveniet numquam <br/>minima libero? Earum obcaecati, aut fugiat corporis non quae, <br/>eligendi nesciunt molestiae provident ad est sit in? Expedita <br/>nesciunt architecto rem in officia nihil ad placeat quisquam. <br/></small>
            </div>

            <div className="training">
                <h3>TRAINING <span style={{color:"#E5B836"}}>PROGRAM</span></h3>

                <div className="trainingCategory">
                    <div className="training1">
                        <div className="trainingName">
                            <h5>YOGA TRAINING SESSION &emsp;&#10132;</h5>
                        </div>
                    </div>
                    <div className="training2">
                        <div className="trainingName">
                            <h5>CARDIO TRAINING SESSION &emsp;&#10132;</h5>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="whyChooseUs">
                <h3><span style={{color:"#E5B836"}}>WHY</span> CHOOSE US</h3>

                <div className="boxes">
                    <div className="chooseBox">
                        <img src={Group87} alt="" style={{marginTop:"20%",marginBottom:"12%"}}/>
                        <h5>FREE FITNESS TRAINING</h5>
                        <small>Lorem, ipsum dolor sit amet consectetur adipisicing.<br/>facilis cupiditate voluptates. Doloribus atque aut consequuntur neque pariatur.</small>
                    </div>
                    <div className="chooseBox">
                        <img src={Group88} alt="" style={{marginTop:"20%",marginBottom:"10%"}}/>
                        <h5>TONS OF CARDIO & STRENGTH</h5>
                        <small>Lorem, ipsum dolor sit amet consectetur adipisicing.<br/>facilis cupiditate voluptates. Doloribus atque aut consequuntur neque pariatur.</small>
                    </div>
                    <div className="chooseBox">
                        <img src={gift} alt="" style={{marginTop:"30%",marginBottom:"11%"}}/>
                        <h5>NO COMMITMENT MEMBERSHIPS</h5>
                        <small>Lorem, ipsum dolor sit amet consectetur adipisicing.<br/>facilis cupiditate voluptates. Doloribus atque aut consequuntur neque pariatur.</small>
                    </div>
                </div>

            </div>

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

            <p style={{background:"#212529",color:"white"}}><small>&copy;2020 Programming Hero.All Rights Reserved.</small></p> 

        </div>
            
    
    );
};

export default Home;

