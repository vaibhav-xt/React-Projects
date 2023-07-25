import React, { useEffect } from 'react'
import Card from '../components/Card.js'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../actions/pizzaAction'
import { Link } from 'react-router-dom'
import loading_logo from '../img/loading.svg'
export default function Shop() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllPizzas())
    }, [dispatch])

    const pizzaState = useSelector(state => state.getAllPizzasReducer)
    const { pizzas, error, loading } = pizzaState

    const userState = useSelector(state => state.loginUserReducer)
    const { currentUser } = userState;

    return (
        <>
            {/* <div className="h-[calc(100vh-80px)] w-full bg-red-50 relative flex justify-end items-center bg-no-repeat" style={{ backgroundImage: `url(${pizza})` }}>
                <div className='relative text-white z-40 px-8 flex flex-col justify-center items-center gap-4 md:gap-8 w-full lg:w-2/3'>
                    <h1 className='text-[2rem] md:text-[5rem] font-semibold text-center w-full'>Quality F<span className='text-red-500'>oo</span>ds</h1>
                    <h2 className='sm:text[1.5rem] text-xl text-center w-full'><span className='text-red-500 tracking-widest'>HEALSY FOOD FOR</span> HEALTHY BODY</h2>
                    <a href="#pizzas" className='bg-red-800 transition-all duration-500 hover:bg-red-500 px-8 py-4 rounded-[999px]'>Scroll Down</a>
                </div>
                <div className='absolute top-0 h-full w-full bg-gradient-to-l from-black/100 to-transparent'></div>
            </div> */}
            <div id='pizzas' className='max-w-[1200px] m-auto pb-20'>
                <h1 className='text-[3rem] font-serif text-font-semibold text-red-500 text-center pb-8'>Pizzas</h1>
                <div className='flex flex-wrap justify-around gap-8'>
                    {loading ? <img className='w-20' src={loading_logo} alt="" /> : error ? (<h1>Something went wrong</h1>) : (pizzas.map((pizza, index) => {
                        return <Card key={index} id={pizza.id} pizza={pizza} />
                    }))}
                </div>
            </div>
            <div className='flex flex-col items-center bg-red-700 text-white text-3xl py-8 gap-4'>
                <h1>Want To Make Custom Pizza??</h1>
                <Link to={currentUser ? '/custom-pizza' : '/login'} className='text-xl bg-white text-red-500 px-4 py-2 rounded-full hover:bg-red-800 transition-all duration-500 hover:text-white'>Click Here <i className="fas fa-regular fa-pizza-slice text-xl "></i></Link>
            </div>
        </>
    )
}
