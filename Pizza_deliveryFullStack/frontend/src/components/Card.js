import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartAction';
import { useNavigate } from 'react-router'
export default function Card({ pizza }) {

    const [quantity, setQuantity] = useState(1);
    const [varient, setVarient] = useState('small');

    const dispatch = useDispatch();

    function addtoCart() {
        dispatch(addToCart(pizza, quantity, varient))
    }

    const navigate = useNavigate()
    function toSignUp() {
        navigate('/login')
    }

    const userState = useSelector(state => state.loginUserReducer)
    const { currentUser } = userState;



    return (
        <>
            <div className='w-[300px] bg-white shadow-2xl rounded-2xl overflow-hidden'>
                <div className='w-full h-[200px]'>
                    <img src={pizza.image} alt="" className='w-full h-full object-cover' />
                </div>
                <h2 className='text-2xl font-semibold px-4 pt-2'>{pizza.name}</h2>
                <p className='px-4 py-2 text-sm'>{pizza.description}</p>
                <div className='flex justify-between p-4 pt-0 gap-4 w-full'>
                    <div className='w-1/2'>
                        <p className='font-medium mt-2'>Variants:</p>
                        <select name="" id="" className='w-full border-2 bg-white border-black rounded-md' value={varient} onChange={(e) => setVarient(e.target.value)}>
                            {
                                pizza.varients.map((varient, index) => {
                                    return <option value={varient} key={index}>{varient}</option>
                                })
                            }
                        </select>
                        <p className='font-medium mt-4'>Price: <span className='font-normal'>{pizza.prices[0][varient] * quantity} Rs/-</span></p>
                    </div>
                    <div className='w-1/2'>
                        <p className='font-medium mt-2'>Quantity: </p>
                        <div className='w-full flex justify-center items-center gap-4'>
                            <i className="fa-solid fa-minus cursor-pointer" onClick={() => quantity <= 1 ? setQuantity(1) : setQuantity(quantity - 1)} ></i>
                            <p>{quantity}</p>
                            <i className="fa-solid fa-plus cursor-pointer" onClick={() => quantity >= 10 ? setQuantity(10) : setQuantity(quantity + 1)}></i>
                        </div>
                        <div className='mt-4'>
                            {<div className='w-full font-medium bg-red-700 hover:bg-red-500 px-4 py-2 rounded-full text-white cursor-pointer' onClick={currentUser ? addtoCart : toSignUp}>Add to Cart</div>}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
