import './GrandTotal.css'
import React from 'react'
import location from '../../../icon/LOCATION.png'
import check from '../../../icon/check.png'

export default function GrandTotal(props) {
    return (
        <div className='total-container'>
            <div className='delivery-availibilty'>
                <p className='available'>Delivery Availability</p>
                <div className='location'>
                    <img src={location} alt="" />
                    <input type="text" placeholder='110003' />
                    <a href="/">CHANGE</a>
                </div>
                <div className="status">
                    <div>
                        <img src={check} alt="" />
                        <p>Free <br /> delivery</p>
                    </div>
                    <div>
                        <img src={check} alt="" />
                        <p>Cash On <br /> delivery</p>
                    </div>
                    <div>
                        <img src={check} alt="" />
                        <p>Estimated delivery <br /> time is 3 - 5 days</p>
                    </div>
                </div>

            </div>
            <div className="cash-summary">
                <h3>Order Summary (xx items)</h3>
                <div className='summary'>
                    <div><span>Subtotal</span> <span>{props.sumTotal} $</span></div>
                    <div><span>Total Discount</span> <span>-{props.discount} $</span></div>
                    <div><span>Standard Shipping</span> <span>Free</span></div>
                </div>

                <div className="OrderTotal">
                    <div>
                        <span>Order Total</span>
                        <span className='total'>{props.sumTotal - props.discount} $</span>
                    </div>
                    <div>
                        <a href='/'>CONTINUE SHOPPING</a>
                        <a href='/'>CHECKOUT</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
