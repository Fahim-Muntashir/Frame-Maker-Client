import React from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise =loadStripe(process.env.RREACT_APP_Payment_Gateway_PK);


const Payment = () => {
    return (
        <div className='text-center my-auto mx-auto'>
            <h1>Provide your Payment Info</h1>
            <Elements stripe={stripePromise}>
                  <CheckoutForm></CheckoutForm>
           </Elements>
          
        </div>
    );
};

export default Payment;