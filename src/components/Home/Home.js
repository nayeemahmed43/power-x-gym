import React from 'react';
import './Home.css';
import Group80 from "../../images/Group 80.png";
import Group81 from "../../images/Group 81.png";
import Group82 from "../../images/Group 82.png";
import wellsChan from "../../images/wells-chan-H-vAxuWxmi8-unsplash.jpg";;

const Home = () => {
    return (
         <div className="home">

            <nav className="nav">
                    <h3>POWER <span id="name">X</span></h3>
                <div className="navItem">
                    <h6>Home</h6>
                    <h6>Services</h6>
                    <h6>Our Classes</h6>
                    <h6>About Us</h6>
                    <h6>Blog</h6>
                    <h6>Pricing</h6>
                    <h6>Contact Us</h6>
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

        </div>
            
    
    );
};

export default Home;

