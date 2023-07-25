import React from 'react'
import handmade from '../img/handmade.jpg'
import free from '../img/free.png'
import menu from '../img/menu.png'
import dish from '../img/dish.png'
import time from '../img/time.png'

export default function AboutKitchen() {
    return (
        <div>
            <div className='text-center max-w-[1200px] m-auto px-8 py-20 flex flex-col items-center gap-4'>
                <h1 className='text-4xl font-bold'>ABOUT <span className='text-red-700'> BLENDED </span>KITCHEN</h1>
                <p className='text-xl font-semibold'>OUR BACKGROUND</p>
                <hr className='w-32 h-1 bg-gray-500' />
                <p>Bleded Kitchen opened its dorrs in 2000, and has been providing great projects and services ever since. What sets us apart from the rest is our ability to customize our offering to customer's need, as well as our fantastic learn of specialits.</p>
                <p>Noe matter how unique or challengeing you request is, you can count on us to find the right solution for you Browse through our products and services below, and got in touch with us today.</p>
            </div>
            <div className='relative h-[300px] object-cover flex justify-start items-center' style={{ backgroundImage: `url(${handmade})` }}>
                <h1 className='z-50 text-md sm:text-[3vw] text-white font-medium font-serif px-4'>Handpicked collection of Bistro market specials <br /> can be delivered to your home or office!</h1>
                <div className='absolute top-0 h-full w-full bg-gradient-to-l to-black/100 from-black/50'></div>
            </div>
            <div className='min-h-[300px] max-w-[1200px] m-auto flex flex-col items-center gap-8 px-4 py-16'>
                <h1 className='text-4xl font-semibold'>Our Some Features</h1>
                <p className='w-full text-center'>The role of a good cook ware in the preparation of a sumptons meal cannot be over <br /> emphasized then one consider white bread</p>
                <div className='flex flex-wrap justify-around items-center gap-4 px-4 w-full'>
                    <div className='w-40 min-h-40 bg-white rounded-xl drop-shadow-md flex flex-col items-center gap-4 p-8 '>
                        <img src={free} alt="" className='w-1/2' />
                        <h4>Free Dishes</h4>
                    </div>
                    <div className='w-40 min-h-40 bg-white rounded-xl drop-shadow-md flex flex-col items-center gap-4 p-8 '>
                        <img src={menu} alt="" className='w-1/2' />
                        <h4>Free Dishes</h4>
                    </div>
                    <div className='w-40 min-h-40 bg-white rounded-xl drop-shadow-md flex flex-col items-center gap-4 p-8 '>
                        <img src={dish} alt="" className='w-1/2' />
                        <h4>Free Dishes</h4>
                    </div>
                    <div className='w-40 min-h-40 bg-white rounded-xl drop-shadow-md flex flex-col items-center gap-4 p-8 '>
                        <img src={time} alt="" className='w-1/2' />
                        <h4>Free Dishes</h4>
                    </div>
                </div>
            </div>
            <footer className='bg-black text-white text-center p-4'>
                <p>	&#169;2023 by Blended Kitchen.</p>
            </footer>
        </div>
    )
}
