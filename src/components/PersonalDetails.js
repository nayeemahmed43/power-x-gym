import React, { useState } from 'react';
import Footer from './Footer';
import axios from 'axios';
import { useForm} from 'react-hook-form';
import { useParams } from 'react-router-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const PersonalDetails = () => {
    const { register,  errors } = useForm();
    const [orderId, setOrderId] = useState(null);
    const [membershipInfo, setMembershipInfo] = useState(null);
    const {key} = useParams();
    const stripePromise = loadStripe('pk_test_rFGZ5SVmq1jmDLoH9TNKeG5C00gtdXy9q4');

    const [membershipId, setMembershipId] = useState(null) //pass this membership id to payment option
    const [membershipType, setMembershipType] = useState(null)  //set this taking props from pricing page



    // const onSubmit = data => { 
    //     setMembershipInfo(data);
        
    //   }

    //   const handlePlaceOrder = (payment) =>{
    //     const orderDetail = {MonthlyPlan: key, shipment: membershipInfo, payment: payment};
    //     fetch('',{
    //       method: 'POST',
    //       headers:{
    //           'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(orderDetail)
    //     })
    //     .then(res => res.json())
    //     .then(order => {
    //       setOrderId(order._id);
         
    //     })
    //   }

    //dont change code below
    const [ isFormVisible, setIsFormVisible] = useState(true)
    const [ isPaymentVisible, setIsPaymentVisible] = useState(false)
    const [ isMsgVisible, setIsMsgVisible] = useState(false)
    const memberData = {
        firstName:'',
        lastName: '',
        email:'',
        mobile : '',
        dob : '',
        gender:'',
        address:'',
        payment:''
    }
    const handleChange = (e)=>{
        memberData[e.target.name] = e.target.value
    }
    const handlePayment = (e)=>{
        e.preventDefault()
        setIsMsgVisible(true)
        setIsPaymentVisible(false)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        setIsFormVisible(false)
        setMembershipType(key)
        setIsPaymentVisible(true)
        submitToDatabase()
    }
    

    const submitToDatabase = ()=>{
        const payLoad ={
            firstName: memberData.firstName,
            lastName:  memberData.lastName,
            email: memberData.email,
            mobile :  memberData.mobile, 
            dob :  memberData.dob,
            gender: memberData.gender,
            address: memberData.address,
            membershipType: membershipType,
            payment: memberData.payment
        }
        axios({
            url:'https://power-gym-server.herokuapp.com/api/save',
            method:'POST',
            data: payLoad
            
        })
        .then((res)=>{
            console.log("data has been sent")
            setMembershipId(res.data.id)
            
        })
        .catch(()=>{
            console.log("internal server error")
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

        <form className="ship-form " onSubmit={handleSubmit}>
                    <input name="firstName" className="form-control"  onChange={handleChange} ref={register({ required: true })} placeholder="First Name"/>
                    {errors.firstname && <span className="error">First Name is required</span>}<br/>

                    <input name="lastName" className="form-control" onChange={handleChange} ref={register({ required: true })} placeholder="Last Name"/>
                    {errors.lastname && <span className="error">Last Name is required</span>}<br/>

                    <input name="email" className="form-control" onChange={handleChange} ref={register({ required: true })} placeholder="Email" />
                    {errors.email && <span className="error">Email is required</span>}<br/>

                    <input name="mobile" className="form-control" onChange={handleChange} ref={register({ required: true })} placeholder="Mobile Number" />
                    {errors.phone && <span className="error">Phone Number is required</span>}<br/>

                    <input name="dob" type="date" className="form-control" onChange={handleChange} ref={register({ required: true })} placeholder="Date of Birth : dd/mm/yy" />
                    {errors.date && <span className="error">Date is required</span>}<br/>

                    <select name="gender" className="form-control" onChange={handleChange} id="cars" ref={register({ required: true })} placeholder="Gender" >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    </select>
                    {errors.gender && <span className="error">Gender is required</span>}<br/>

                    <input name="address" className="form-control" onChange={handleChange} ref={register({ required: true })} placeholder="Your Address" />
                    {errors.address && <span className="error">Address is required</span>}<br/>

                    <button className="btn btn-primary form-control" type="submit" >Next</button>
                </form> 
                </div>

                <div  className="col-md-6">
                    <div style={{marginTop: '200px'}}>
                        <h3>Payment Information</h3>
                <Elements stripe={stripePromise}>
                    <CheckoutForm handlePlaceOrder={membershipId} handlePayment={handlePayment}></CheckoutForm>
                </Elements>
                <br/>
                {
            orderId && <div>
              <h3>Thank you for joining with us</h3>
          <p>Your  Id is: {orderId}</p>
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