import React from 'react'
import './Hero.css'
import book from '../../images/book-icon.svg'
import clock from '../../images/clock-2.svg'
import live from '../../images/live-icon.svg'
import scholar from '../../images/scholor.svg'
import ads from '../../images/ads.svg'
import Form from './Form/Form'
export default function Hero() {

    return (
        <main className='hero'>
            <div className='hero-left'>
                <h1>Access curated courses worth <br />
                    &#8377; <span className='horizontal-bar'>18,500</span> at just <span>&#8377;99</span> per year!</h1>
                <div>
                    <img src={book} alt="book" />
                    <p><span>100+</span> Job relevant courses</p>
                </div>
                <div>
                    <img src={clock} alt="click" />
                    <p><span>20,000+</span> Hours of content</p>
                </div>
                <div>
                    <img src={live} alt="live" />
                    <p><span>Exclusive</span> webinar courses</p>
                </div>
                <div>
                    <img src={scholar} alt="Scholarship" />
                    <p>Scholarship worth <span>&#8377;94,500</span></p>
                </div>
                <div>
                    <img src={ads} alt="ADS" />
                    <p><span>Ad Free</span> learning experience</p>
                </div>
            </div>

            <Form />
        </main >
    )
}
