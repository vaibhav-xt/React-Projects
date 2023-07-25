import React from 'react'
import "./ProgressBar.css"

export default function ProgressBar() {
    return (
        <div className='progress-container'>
            <div className="progress">
                <span className='dot outline'></span>
                <span className='bar'></span>
                <span className='dot blur outline'></span>
                <span className='bar bar-blur'></span>
                <span className='dot blur outline'></span>
            </div>
            <div className='progress-title'>
                <span>SHOPPING CART</span>
                <span>ORDER DETAILS</span>
                <span>MAKE PAYMENT</span>
            </div>
        </div>
    )
}
