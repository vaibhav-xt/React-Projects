import './Footer.css'
import React from 'react'
import phone from '../../icon/phone.png'

export default function Footer() {
    return (
        <footer>
            <div className='main-container'>
                <div className='about-container'>
                    <div className='about'>
                        <div>
                            <h1>LOREM</h1>
                            <ul>
                                <li>Dummy</li>
                                <li>Dummy</li>
                                <li>Dummy</li>
                                <li>Dummy</li>
                                <li>Dummy</li>
                            </ul>
                        </div>
                        <div>
                            <h1>LOREM</h1>
                            <ul>
                                <li>Dummy</li>
                                <li>Dummy</li>
                                <li>Dummy</li>
                                <li>Dummy</li>
                                <li>Dummy</li>
                                <li>Dummy</li>
                                <li>Dummy</li>
                                <li>Dummy</li>
                            </ul>
                        </div>
                        <div>
                            <h1>LOREM</h1>
                            <ul>
                                <li>Dummy</li>
                                <li>Dummy</li>
                                <li>Dummy</li>
                                <li>Dummy</li>
                                <li>Dummy</li>
                                <li>Dummy</li>
                                <li>Dummy</li>
                                <li>Dummy</li>
                            </ul>
                        </div>
                        <div>
                            <h1>LOREM</h1>
                            <ul>
                                <li>Dummy</li>
                                <li>Dummy</li>
                                <li>Dummy</li>
                                <li>Dummy</li>
                                <li>Dummy</li>
                                <li>Dummy</li>
                            </ul>
                        </div>
                    </div>
                    <div className='contact-us'>
                        <h2>CALL US</h2>
                        <div className='routine'>
                            <span>Monday-Friday</span> <span>Saturday & Sunday</span>
                            <span>8am to 9pm CST</span>
                            <span>10am to 6pm CST</span>
                        </div>
                        <div className='call'>
                            <img src={phone} alt="" />
                            <span>1800-123-1234</span>
                        </div>

                        <p className='gmail'>support.us@test.com</p>
                    </div>
                </div>

                <hr />

                <div className='footer-bottom'>
                    <ul>
                        <li>Dummy</li>
                        <li className='footer-bar'>Dummy</li>
                        <li className='footer-bar'>Dummy</li>
                        <li className='footer-bar'>Dummy</li>
                    </ul>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga sapiente dolore deleniti!</p>
                </div>
            </div>
        </footer>
    )
}
