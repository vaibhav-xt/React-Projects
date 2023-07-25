import React from 'react'
import axios from 'axios'
import pizza from '../img/bgPizza.jpg'
import logo from '../img/pizza.png'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/cartAction'
import { deleteFromCart } from '../actions/cartAction'

export default function Cart() {
    const cartState = useSelector(state => state.cartReducer)
    const cartItems = cartState.cartItems
    var subtotal = cartItems.reduce((x, item) => x + item.price, 0)
    const dispatch = useDispatch()

    const userState = useSelector(state => state.loginUserReducer)
    const { currentUser } = userState;

    const checkoutHandler = async () => {

        const { data: { order } } = await axios.post('/api/payment', {
            amount: subtotal
        })
        var options = {
            key: "rzp_test_jb0qcC5pemGfB6",
            amount: order.amount,
            currency: "INR",
            name: "Pizza App",
            description: "Test Transaction",
            image: logo,
            order_id: order.id,
            callback_url: 'http://localhost:5000/api/paymentVerification',
            prefill: {
                name: currentUser.firstName,
                email: currentUser.email,
            },
            notes: {
                address: currentUser.address
            },
            theme: {
                color: "#FF0000"
            }
        };
        const razor = new window.Razorpay(options)
        razor.open()
    }



    return (
        <div className="min-h-[calc(100vh-80px)] w-full relative flex justify-end items-center bg-repeat" style={{ backgroundImage: `url(${pizza})` }}>
            <div className='max-w-[1200px] h-full w-full m-auto z-40 md:p-12'>
                <div className='max-w-1000px w-full min-h-[calc(100vh-80px)]  md:min-h-[800px] backdrop-blur-md backdrop-brightness-150 py-8 md:rounded-3xl p-8 bg-white'>
                    <h1 className='text-[2rem] sm:text-[3rem] text-center font-semibold mb-4 border-b-2 border-red-100'>Shopping Cart</h1>
                    <div className='flex gap-4 flex-col lg:flex-row'>
                        <div className='w-full lg:w-2/'>
                            {
                                cartItems.map((pizza, index) => {
                                    return <div key={index} className='border-b-2 border-red-100 py-4 flex flex-wrap justify-between items-center px-4 gap-4 min-h-[7rem]'>
                                        <div className='w-full sm:w-2/3'>
                                            <p className='flex items-center gap-2'><span className='text-2xl font-semibold'> {pizza.name}</span></p>
                                            <p>[ {pizza.varient} ]</p>
                                            <p><span className='font-medium'>Price:</span> {pizza.quantity} * {pizza.prices[0][pizza.varient]} = {pizza.price}</p>
                                            <p><span className='font-medium'>Quantity:</span> <i className="fa-solid fa-minus cursor-pointer text-red-500" onClick={() => { dispatch(addToCart(pizza, pizza.quantity - 1, pizza.varient)) }}></i> {pizza.quantity} <i className="fa-solid fa-plus cursor-pointer text-green-600" onClick={() => { dispatch(addToCart(pizza, pizza.quantity + 1, pizza.varient)) }}></i> </p>
                                        </div>
                                        <div className='h-full w-[7rem]'>
                                            <img src={pizza.image} className='h-full w-full object-cover' alt="" />
                                        </div>
                                        <i className="fa-solid fa-trash cursor-pointer hover:text-red-500" onClick={() => dispatch(deleteFromCart(pizza))}></i>
                                    </div>
                                })
                            }
                        </div>
                        {
                            subtotal !== 0 && (<div className='w-full lg:w-1/3 text-right'>
                                <p className='text-2xl font-semibold'>Sub Total: {subtotal}/-</p>
                                <button className='bg-red-700 hover:bg-red-500 text-white px-4 py-2 rounded-full mt-4' onClick={checkoutHandler}>Pay Now</button>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <div className='absolute top-0 h-full z-30 w-full bg-gradient-to-l from-black/100 to-transparent'></div>
        </div>
    )
}