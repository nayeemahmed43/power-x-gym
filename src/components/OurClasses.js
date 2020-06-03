import React from 'react';
import Header from './Header';
import Footer from './Footer';

const OurClasses = () => {
    return (
        <div>
            <Header></Header>
           

            <div className="row" style={{justifyContent:"center", marginBottom:"10%",marginTop:"10%"}}>
                <div className="class-box" id="class-box1">
                    <div className="classes">
                        <h5>PSYCHO TRAINING &emsp;&#10132;</h5>
                    </div>
                </div>
            <div className="class-box" id="class-box2">
                    <div className="classes">
                        <h5>SELF DEFENCE &emsp;&#10132;</h5>
                    </div>
            </div>
            <div className="class-box" id="class-box3">
                    <div className="classes">
                        <h5>ADVANCE GYM &emsp;&#10132;</h5>
                    </div>
            </div>
            <div className="class-box" id="class-box4">
                    <div className="classes">
                        <h5>CARDIO TRAINING &emsp;&#10132;</h5>
                    </div>
            </div>
            <div className="class-box" id="class-box5">
                    <div className="classes">
                        <h5>STRENGTH TRAINING &emsp;&#10132;</h5>
                    </div>
            </div>
            <div className="class-box" id="class-box6">
                    <div className="classes">
                        <h5>PSYCHO TRAINING &emsp;&#10132;</h5>
                    </div>
            </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default OurClasses;