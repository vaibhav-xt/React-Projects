import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../../actions/pizzaAction'

export default function OurPizzas() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllPizzas())
    }, [dispatch])


    const pizzaState = useSelector(state => state.getAllPizzasReducer)
    const { pizzas } = pizzaState

    return (
        <div className='bg-gray-50 min-h-[calc(100vh-80px)]'>
            <h1 className='text-center text-red-600 text-4xl font-bold px-4 pt-4'>Admin Panel</h1>
            <div className='max-w-[1200px] overflow-hidden w-full flex justify-around py-2 my-8 px-4 bg-red-700 text-white text-xl font-semibold m-auto'>
                <Link to="/admin/new-users">Users</Link>
                <Link to="/admin/pizzas" className='text-red-200'>Our Pizzas</Link>
                <Link to="/admin/orders">Orders</Link>
            </div>
            <div className="max-w-[1200px] overflow-hidden w-full m-auto p-2 overflow-x-auto">
                <table className="bg-red-50 w-full text-center border-collapse border border-slate-500">
                    <thead>
                        <tr>
                            <th className='border border-black p-2'>Name</th>
                            <th className='border border-black p-2'>Category</th>
                            <th className='border border-black p-2'>Varient</th>
                            <th className='border border-black p-2'>image</th>
                            <th className='border border-black p-2'>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pizzas.map(pizza => <tr key={pizza._id}>
                            <td className='border border-black p-2'>{pizza.name}</td>
                            <td className='border border-black p-2'>
                                {pizza.varients[0]}, <br />
                                {pizza.varients[1]}, <br />
                                {pizza.varients[2]}
                            </td>
                            <td className='border border-black p-2'>
                                {pizza.varients[0]} : {pizza.prices[0].small}, <br />
                                {pizza.varients[1]} : {pizza.prices[0].medium}, <br />
                                {pizza.varients[2]} : {pizza.prices[0].large}
                            </td>
                            <td className='border border-black p-2'><img className='w-48' src={pizza.image} alt="" /></td>
                            <td className='border border-black p-2'>{pizza.description}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
