import React, { useState } from 'react';
import Footer from './Footer';
import { useForm} from 'react-hook-form';
import { useParams } from 'react-router-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const PersonalDetails = () => {
    const { register, handleSubmit, errors } = useForm();
    const [orderId, setOrderId] = useState(null);
    const [membershipInfo, setMembershipInfo] = useState(null);
    const {key} = useParams();
    const stripePromise = loadStripe('pk_test_rFGZ5SVmq1jmDLoH9TNKeG5C00gtdXy9q4');



    const onSubmit = data => { 
        setMembershipInfo(data);
        
      }

      const handlePlaceOrder = (payment) =>{
        const orderDetail = {MonthlyPlan: key, shipment: membershipInfo, payment: payment};
        fetch('',{
          method: 'POST',
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(orderDetail)
        })
        .then(res => res.json())
        .then(order => {
          setOrderId(order._id);
         
        })
      }

    return (
        <div>
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
                    <p>YOUR GYM MEMBERSHIP</p>
                </div>
        </div>

        <div className="row">
        <div style={{display: key }} className="col-md-6">
          <h3>Membership Information</h3>

        <form className="ship-form " onSubmit={handleSubmit(onSubmit)}>
                    <input name="firstname" className="form-control"  ref={register({ required: true })} placeholder="First Name"/>
                    {errors.firstname && <span className="error">First Name is required</span>}<br/>

                    <input name="lastname" className="form-control"  ref={register({ required: true })} placeholder="Last Name"/>
                    {errors.lastname && <span className="error">Last Name is required</span>}<br/>

                    <input name="email" className="form-control" ref={register({ required: true })} placeholder="Email" />
                    {errors.email && <span className="error">Email is required</span>}<br/>

                    <input name="phone" className="form-control" ref={register({ required: true })} placeholder="Mobile Number" />
                    {errors.phone && <span className="error">Phone Number is required</span>}<br/>

                    <input name="date" type="date" className="form-control"  ref={register({ required: true })} placeholder="Date of Birth : dd/mm/yy" />
                    {errors.date && <span className="error">Date is required</span>}<br/>

                    <input name="gender" className="form-control"  ref={register({ required: true })} placeholder="Gender" />
                    {errors.gender && <span className="error">Gender is required</span>}<br/>

                    <input name="address" className="form-control"  ref={register({ required: true })} placeholder="Your Address" />
                    {errors.address && <span className="error">Address is required</span>}<br/>

                    <input name="country" className="form-control"  ref={register({ required: true })} placeholder="Country" />
                    {errors.country && <span className="error">Country is required</span>}<br/>

                    <input name="city" className="form-control"  ref={register({ required: true })} placeholder="City" />
                    {errors.city && <span className="error">City is required</span>}<br/>

                    <input name="postcode" className="form-control"  ref={register({ required: true })} placeholder="Post Code" />
                    {errors.postcode && <span className="error">Post Code is required</span>}<br/>

                    <button className="btn btn-primary form-control" type="submit" >Next</button>
                </form> 
                </div>

                <div  className="col-md-6">
                    <div style={{marginTop: '200px', display: membershipInfo ? 'block' : 'none'}}>
                        <h3>Payment Information</h3>
                <Elements stripe={stripePromise}>
                    <CheckoutForm handlePlaceOrder={handlePlaceOrder}></CheckoutForm>
                </Elements>
                <br/>
                {
            orderId && <div>
              <h3>Thank you for shopping with us</h3>
          <p>Your Order Id is: {orderId}</p>
            </div>
          }
          </div>
        </div>

                </div>

        <Footer></Footer>

        </div>
    );
};

export default PersonalDetails;