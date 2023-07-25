import React from 'react'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Sucess() {
    const search = useSearchParams()[0]
    const userState = useSelector(state => state.loginUserReducer)
    const { currentUser } = userState;

    const cartState = useSelector(state => state.cartReducer)
    let history = JSON.parse(localStorage.getItem('history'));
    if (!history) {
        history = [];
    }
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    cartState.cartItems.map(item => history.push({
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        email: currentUser.email,
        address: currentUser.address,
        image: item.image,
        item: item.name,
        price: item.price,
        prices: item.prices,
        quantity: item.quantity,
        varient: item.varient,
        _id: Math.floor(Math.random() * 9000000000) + 1000000000,
        dateTime: dateTime
    }))
    localStorage.setItem('history', JSON.stringify(history));
    localStorage.removeItem('cartItems')

    axios.post('/api/orderList', history)
        .then(response => {
            console.log('Data saved successfully!');
        })
        .catch(error => {
            console.error(error);
            console.log('Failed to save data!');
        });

    return (
        <div className='min-h-[calc(100vh-80px)] w-full flex flex-col items-center justify-center'>
            <h1 className='font-bold text-3xl text-red-600'>ORDER SUCCESSFULL</h1>
            <p className='text-md'>Reference No. <span className='font-semibold'>{search.get('reference')}</span></p>
            <a className='text-xl text-white bg-red-700 px-4 py-2 rounded-full mt-8 border-2 border-red-700 hover:bg-white hover:text-red-700 transition-all duration-500' href="/history">Order History</a>
        </div>
    )
}
