import React, { useState } from 'react'
import logo from '../img/pizza.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function Navbar() {
    const [toggle, setToggle] = useState("hidden");

    const cartState = useSelector(state => state.cartReducer)
    const userState = useSelector(state => state.loginUserReducer)
    const { currentUser } = userState;
    const history = JSON.parse(localStorage.getItem('history'))
    const logOut = () => {
        localStorage.removeItem('currentUser')
        window.location.reload()
    }

    return (
        <header className='bg-white sticky top-0 z-50'>
            <nav className='h-[80px] flex items-center justify-between px-8 max-w-[1200px] m-auto'>
                <Link to="/" className='h-4/5'><img src={logo} alt="" className='h-full' /></Link>
                <ul className={`${toggle} z-50 bg-red-50 sm:flex overflow-hidden gap-2 sm:gap-8 items-center fixed right-8 top-[80px] flex-col sm:flex-row sm:relative sm:top-0 w-[150px] sm:w-auto sm:bg-white`}>
                    <li className='sm:hover:text-red-500 transition-all duration-700 hover:bg-red-300 sm:hover:bg-white w-full p-2 sm:p-0 sm:w-auto text-center'><Link to="/">Home </Link></li>
                    <li className='sm:hover:text-red-500 transition-all duration-700 hover:bg-red-300 sm:hover:bg-white w-full p-2 sm:p-0 sm:w-auto text-center'><Link to="/shop">Shop </Link></li>
                    {currentUser && <li className='sm:hover:text-red-500 transition-all duration-700 hover:bg-red-300 sm:hover:bg-white w-full p-2 sm:p-0 sm:w-auto text-center'><Link to="/custom-pizza">Custom Pizza</Link></li>}
                    {currentUser && history && <li className='sm:hover:text-red-500 transition-all duration-700 hover:bg-red-300 sm:hover:bg-white w-full p-2 sm:p-0 sm:w-auto text-center'><Link to="/history">History</Link></li>}
                </ul>
                <div className='flex text-2xl gap-4 items-center'>
                    {currentUser ? (<div className='relative group'>
                        <p className='text-black text-lg'>{currentUser.firstName} <i className="fa-sharp fa-solid fa-caret-up ml-1 transition-all duration-500 group-hover:rotate-180 group-hover:text-red-500"></i></p>
                        <p className='absolute bg-white p-4 w-24 text-center hidden group-hover:block'><button className='text-lg hover:text-red-500' onClick={logOut}>log out</button></p>
                    </div>) : (<Link to="/login" className='transition-all duration-700 text-lg hover:text-red-500'>Login </Link>)}

                    {currentUser && <Link to='/cart' className='transition-all relative duration-700 bg-red-500 rounded-full text-white hover:text-black'>
                        <i className="fa-sharp fa-solid fa-cart-shopping cursor-pointer px-4 py-2"></i>
                        {
                            cartState.cartItems.length !== 0 && <p className='absolute -top-1 right-3 flex justify-center items-center bg-red-500 rounded-full w-4 h-4 text-sm'><span>{cartState.cartItems.length}</span></p>
                        }
                    </Link>}
                    <i className="fas fa-regular fa-bars-staggered sm:hidden cursor-pointer transition-all duration-500 hover:text-red-500 text-2xl" onClick={() => toggle === "flex" ? setToggle("hidden") : setToggle("flex")}></i>
                </div>
            </nav>
        </header>
    )
}
