import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function NewUser() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/getAllUsers', {
            method: "GET",
        }).then((res) => res.json())
            .then((data) => {
                setUsers(data.data)
            })
    }, [])
    console.log(users)

    return (
        <div className='bg-gray-50 min-h-[calc(100vh-80px)]'>
            <h1 className='text-center text-red-600 text-4xl font-bold px-4 pt-4'>Admin Panel</h1>
            <div className='max-w-[1200px] overflow-hidden w-full flex justify-around py-2 my-8 px-4 bg-red-700 text-white text-xl font-semibold m-auto'>
                <Link to="/admin/new-users" className='text-red-200'>Users</Link>
                <Link to="/admin/pizzas">Our Pizzas</Link>
                <Link to="/admin/orders">Orders</Link>
            </div>
            <div className="max-w-[1200px] overflow-hidden w-full m-auto p-2 overflow-x-auto">
                <table className="bg-red-50 w-full text-center border-collapse border border-slate-500">
                    <thead>
                        <tr>
                            <th className='border border-black p-2'>First Name</th>
                            <th className='border border-black p-2'>Last Name</th>
                            <th className='border border-black p-2'>Email</th>
                            <th className='border border-black p-2'>Address</th>
                            <th className='border border-black p-2'>isAdmin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user =>
                            <tr key={user._id}>
                                <td className='border border-black p-2'>{user.firstName} </td>
                                <td className='border border-black p-2'>{user.lastName} </td>
                                <td className='border border-black p-2'>{user.email} </td>
                                <td className='border border-black p-2'>{user.address} </td>
                                <td className='border border-black p-2'>{user.isAdmin ? "True" : "False"} </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
