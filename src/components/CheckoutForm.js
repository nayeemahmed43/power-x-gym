import React, { useState } from 'react';
import ReactGA from 'react-ga';
import axios from 'axios';
import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const CheckoutForm = (props) => {
    const [paymentError, setPaymentError] = useState(null);
    const [paymentFinished, setPaymentFinished] = useState(null);
    const stripe = useStripe();
    const elements = useElements();
    const membershipId = props.membershipId
    const paymentEvent = ()=>{
      ReactGA.event({
          category: 'Payment',
          action: 'Paid'
      })
  }

    const updateDatabase = ()=>{
      const payLoad = payment
      axios({
          url:`https://power-gym-server.herokuapp.com/api/save/${membershipId}`,
          method:'PUT',
          data: payLoad
          
      })
      .then((res)=>{
          console.log("data has been updated")
          
      })
      .catch(()=>{
          console.log("Couldn't update the data")
      })
  }





  const handleSubmit = async (event) => {
    event.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    if(error){
        setPaymentError(error.message);
        setPaymentFinished(null);
    }else{
        setPaymentFinished(paymentMethod);
        const payment = {id: paymentMethod.id, last4: paymentMethod.card.last4}
        //props.handlePlaceOrder(payment);
        setPaymentError(null);
        updateDatabase()
        paymentEvent()
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button id="payment-button" type="submit" disabled={!stripe}>
        Pay
      </button>
      {
          paymentError && <p style={{color:'red'}}>{paymentError}</p>
      }
      {
          paymentFinished && <p style={{color:'green'}}>Payment Successfull <br/>Your Membership Procedure is completed</p>
      }
    </form>
  );
};

export default CheckoutForm;