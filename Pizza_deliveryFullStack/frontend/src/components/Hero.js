import React from 'react'
import pizza from '../img/bgPizza.jpg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Hero() {

    const userState = useSelector(state => state.loginUserReducer)
    const { currentUser } = userState;

    return (
        <div className="h-[calc(100vh-80px)] w-full bg-red-50 relative flex justify-end items-center bg-no-repeat" style={{ backgroundImage: `url(${pizza})` }}>
            <div className='relative text-white z-40 px-8 flex flex-col justify-end items-end gap-4 md:gap-8'>
                <h1 className='text-3xl sm:text-[2rem] md:text-[4rem] font-semibold text-right'>Food Made With Love</h1>
                <h2 className='sm:text[1.5rem] md:text-[2rem] text-xl text-right'>Take a slice of our perfect culinary heaven!</h2>
                {
                    currentUser ? (<Link to="/shop" className='bg-red-800 transition-all duration-500 hover:bg-red-500 px-8 py-4 rounded-[999px]'>Order Now</Link>) : <Link to="/signup" className='bg-red-800 transition-all duration-500 hover:bg-red-500 px-8 py-4 rounded-[999px]'>Sign Up Now</Link>
                }
            </div>
            <div className='absolute top-0 h-full w-full bg-gradient-to-l from-black/100 to-transparent'></div>
        </div>
    )
}
