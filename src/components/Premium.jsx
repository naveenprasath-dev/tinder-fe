import axios from 'axios'
import React from 'react'
import { BASE_URL } from '../utils/constants'

function Premium() {
    const handleBuyClick = async (type) => {
        const order = await axios.post(BASE_URL+ "/payment/create", {
            membershipType : type,

        }, {
            withCredentials: true,
        })

        const {amount,keyId, currency, notes, orderId } = order.data;
              // Open Razorpay Checkout
      const options = {
        key: keyId, // Replace with your Razorpay key_id
        amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: currency,
        name: 'Tinder',
        description: 'Test Transaction',
        order_id: orderId, // This is the order_id created in the backend
        prefill: {
          name: notes.firstName + notes.lastName,
          email: notes.email,
          contact: '9999999999'
        },
        theme: {
          color: '#F37254'
        },
      };
        const rzp = new window.Razorpay(options);
        rzp.open();
        // it should open the razorpay dialog box.
    }
  return (
    <div className='m-10'>
        <div className="flex w-full">
        <div className="card bg-base-300 rounded-box grid  h-80  grow place-items-center">
            <h1 className='font-bold text-3xl'>
                Silver Membership
            </h1>
            <ul>
                Chat with other perople.
            </ul>
            <ul>
                100 connection requests per day
            </ul>
            <ul>
                200 calls requests per day
            </ul>
            <button className='btn btn-secondary' onClick={() => handleBuyClick("silver")}> Buy Silver membership</button>
        </div>
        <div className="divider divider-horizontal">OR</div>
        <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
            <h1 className='font-bold text-3xl'>
                Gold Membership
            </h1>
            <ul>
                Chat with other perople.
            </ul>
            <ul>
                Unlimited connection requests per day
            </ul>
            <ul>
                Unlimited calls requests per day
            </ul>
            <button className='btn btn-primary' onClick={() => handleBuyClick("gold")}> Buy Gold membership</button>
        </div>
</div>
    </div>
  )
}

export default Premium