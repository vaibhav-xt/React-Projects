import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Orders() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/getAllOrders', {
            method: "GET",
        }).then((res) => res.json())
            .then((data) => {
                setOrders(data.data)
            })
    }, [])

    return (
        <div className='bg-gray-50 min-h-[calc(100vh-80px)]'>
            <h1 className='text-center text-red-600 text-4xl font-bold px-4 pt-4'>Admin Panel</h1>
            <div className='max-w-[1200px] overflow-hidden w-full flex justify-around py-2 my-8 px-4 bg-red-700 text-white text-xl font-semibold m-auto'>
                <Link to="/admin/new-users">Users</Link>
                <Link to="/admin/pizzas">Our Pizzas</Link>
                <Link to="/admin/orders" className='text-red-200'>Orders</Link>
            </div>
            <div className="max-w-[1200px] overflow-hidden w-full m-auto p-2 overflow-x-auto">
                <table className="bg-red-50 w-full text-center border-collapse border border-slate-500">
                    <thead>
                        <tr>
                            <th className='border border-black p-2'>Name</th>
                            <th className='border border-black p-2'>Item</th>
                            <th className='border border-black p-2'>Varient</th>
                            <th className='border border-black p-2'>Quantity</th>
                            <th className='border border-black p-2'>Price</th>
                            <th className='border border-black p-2'>Email</th>
                            <th className='border border-black p-2'>Date & Time</th>
                            <th className='border border-black p-2'>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) =>
                            <tr key={order._id}>
                                <td className='border border-black p-2'>{order.name}</td>
                                <td className='border border-black p-2'>{order.item}</td>
                                <td className='border border-black p-2'>{order.varient}</td>
                                <td className='border border-black p-2'>{order.quantity}</td>
                                <td className='border border-black p-2'>{order.price}</td>
                                <td className='border border-black p-2'>{order.email}</td>
                                <td className='border border-black p-2'>{order.date_Time}</td>
                                <td className='border border-black p-2'>{order.address}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
