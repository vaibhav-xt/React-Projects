import React, { useState } from 'react'
import clock_1 from '../../../images/clock-icon.svg'
import select from '../../../images/right.svg'
import razorpay from "../../../images/razorpay-icon.svg"
import './Form.css'

export default function Form() {
    const subscriptionExpired = true;
    const money = {
        "12monthsExpired": {
            price: 99,
            perMonth: 8
        },
        "12months": {
            price: 179,
            perMonth: 15
        },
        "6months": {
            price: 149,
            perMonth: 25
        },
        "3months": {
            price: 99,
            perMonth: 33
        }
    }
    const originalPrice = 18500;
    const [selectedSubscription, setSelectedSubscription] = useState(money['12months'].price);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
        }).format(price);
    };
    return (
        <div className='hero-right'>
            <div className='form-top'>
                <div>
                    <p>1</p>
                    <p>Sign Up</p>
                </div>
                <div>
                    <p>2</p>
                    <p>Subscribe</p>
                </div>
            </div>

            <h2>Select your subscription plan</h2>
            <form className='form-bottom'>
                <div className={`subscription-card ${subscriptionExpired ? 'subscription-expired' : ''}`} onClick={() => !subscriptionExpired && setSelectedSubscription(money['12monthsExpired'].price)}>
                    <div className='card-left'>
                        <p className='offer-expired'>Offer Expired</p>
                        <span className='checked'></span>
                        <span className='bold'>12 Months Subscription</span>
                    </div>
                    <div className='card-right'>
                        <p>Total <span className='bold'> &#8377;{money["12monthsExpired"].price}</span></p>
                        <p><span className='bold bold-right'> &#8377;{money["12monthsExpired"].perMonth}</span>/mo</p>
                    </div>
                </div>
                <div className={`subscription-card  ${money['12months'].price === selectedSubscription ? "subscription-selected" : ""}`} onClick={() => setSelectedSubscription(money['12months'].price)}>
                    <div className='card-left'>
                        <p className='offer-active'>Reommended</p>
                        <span className='check'></span>
                        <img src={select} alt="select" />
                        <span className='bold'>12 Months Subscription</span>
                    </div>
                    <div className='card-right'>
                        <p>Total <span className='bold' onClick={(e) => console.log(e)}> &#8377;{money['12months'].price}</span></p>
                        <p><span className='bold bold-right'> &#8377;{money['12months'].perMonth}</span>/mo</p>
                    </div>
                </div>
                <div className={`subscription-card  ${money['6months'].price === selectedSubscription ? "subscription-selected" : ""}`} onClick={() => setSelectedSubscription(money['6months'].price)}>
                    <div className='card-left'>
                        <p className='offer-active'>Reommended</p>
                        <span className='check'></span>
                        <img src={select} alt="select" />
                        <span className='bold'>6 Months Subscrispantion</span>
                    </div>
                    <div className='card-right'>
                        <p>Total <span className='bold'> &#8377;{money['6months'].price}</span></p>
                        <p><span className='bold bold-right'> &#8377;{money['6months'].perMonth}</span>/mo</p>
                    </div>
                </div>
                <div className={`subscription-card  ${money['3months'].price === selectedSubscription ? "subscription-selected" : ""}`} onClick={() => setSelectedSubscription(money['3months'].price)}>
                    <div className='card-left'>
                        <p className='offer-active'>Reommended</p>
                        <span className='check'></span>
                        <img src={select} alt="select" />
                        <span className='bold'>3 Months Subscription</span>
                    </div>
                    <div className='card-right'>
                        <p>Total <span className='bold'> &#8377;{money['3months'].price}</span></p>
                        <p><span className='bold bold-right'> &#8377;{money['3months'].perMonth}</span>/mo</p>
                    </div>
                </div>
                <hr />
                <p className='subscription-fee'>
                    <span>Subscription Fee</span>
                    <span className='bold'>{formatPrice(originalPrice)}</span>
                </p>
                <div className='limited-offer'>
                    <span className='bold'>{formatPrice(originalPrice - selectedSubscription)}</span>
                    <p className='bold'>Limited time offer</p>
                    <p className='clock'><img src={clock_1} alt="" /> Offer valid till 25th March 2023 </p>
                </div>
                <div className='subscription-fee'>
                    <p><span className='bold'>Total</span> (Inc. of 18% GST)</p>
                    <p className='bold'>{formatPrice(Math.round(selectedSubscription + (selectedSubscription * 0.18)))}</p>
                </div>
                <div className='form-btn'>
                    <button>CANCEL</button>
                    <button type='submit'>PROCEED TO PAY</button>
                </div>
            </form>
            <img className='razorpay' src={razorpay} alt="" />
        </div >
    )
}
