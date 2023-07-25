import React from 'react'
import pizza from '../img/bgPizza.jpg'
export default function Cart() {

    let history = JSON.parse(localStorage.getItem('history'));


    return (
        <div className="min-h-[calc(100vh-80px)] w-full relative flex justify-end items-center bg-repeat" style={{ backgroundImage: `url(${pizza})` }}>
            <div className='max-w-[1200px] h-full w-full m-auto z-40 md:p-12'>
                <div className='max-w-1000px w-full min-h-[calc(100vh-80px)]  md:min-h-[800px] backdrop-blur-md backdrop-brightness-150 py-8 md:rounded-3xl p-8 bg-white'>
                    <h1 className='text-[2rem] sm:text-[3rem] text-center font-semibold mb-4 border-b-2 border-red-100'>Order List</h1>
                    <div className='flex gap-4 flex-col lg:flex-row'>
                        <div className='w-full lg:w-2/'>
                            {
                                history.map((pizza, index) => {
                                    return <div key={index} className='border-b-2 border-red-100 py-4 flex flex-wrap justify-between items-center px-4 gap-4 min-h-[7rem]'>
                                        <div className='w-full sm:w-2/3'>
                                            <p className='flex items-center gap-2'><span className='text-2xl font-semibold'> {pizza.item}</span></p>
                                            <p>[ {pizza.varient} ]</p>
                                            <p><span className='font-medium'>Price:</span> {pizza.quantity} * {pizza.prices[0][pizza.varient]} = {pizza.price}</p>
                                            <p><span className='font-medium'>Quantity:</span>{pizza.quantity}</p>
                                            <p>{pizza.dateTime}</p>
                                        </div>
                                        <div className='h-full w-[7rem]'>
                                            <img src={pizza.image} className='h-full w-full object-cover' alt="" />
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute top-0 h-full z-30 w-full bg-gradient-to-l from-black/100 to-transparent'></div>
        </div>
    )
}