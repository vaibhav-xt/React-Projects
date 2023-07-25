import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [menuToggle, setMenuToggle] = useState(false);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`text-black w-full z-50 ${offset >= 100 ? "fixed top-0 bg-white" : "bg-transparent relative top-0"}`}>
                <div className='max-w-[1400px] m-auto flex justify-between p-5'>
                    <div className='md:flex md:items-center'>
                        <Link to="/" className='text-2xl'><span className='font-bold'>COZA</span> Store</Link>

                        {/* Navigation Bar */}
                        <nav className={`md:ml-10 ${menuToggle ? "h-auto" : "h-0"} md:h-auto overflow-hidden`}>
                            <ul className='flex h-full flex-col md:flex-row py-4 md:gap-5'>
                                <li className='text-blue-500'><Link to="/">Home</Link></li>
                                <li><Link to="/">Shop</Link></li>
                                <li className='relative'>
                                    <Link to="/">Features</Link>
                                    <span className='bg-pink-600 text-[10px] realative ml-4 md:absolute -top-3 -right-3 px-2 rounded-lg text-white'>Hot</span>
                                </li>
                                <li><Link to="/">About</Link></li>
                                <li><Link to="/">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>

                    <ul className='flex gap-4 md:items-center'>
                        <li className='cursor-pointer'> <i className="fa-solid fa-magnifying-glass text-2xl"></i></li>
                        <li className='relative cursor-pointer'>
                            <i className="fa-solid fa-cart-shopping text-2xl"></i>
                            <span className='bg-blue-500 text-[10px] text-2xl absolute -top-3 -right-3 w-5 h-5 flex justify-center items-center text-white'>1</span>
                        </li>
                        <li className='relative cursor-pointer'>
                            <i className="fa-regular fa-heart text-2xl"></i>
                            <span className='bg-blue-500 text-[10px] text-2xl absolute -top-3 -right-3 w-5 h-5 flex justify-center items-center text-white'>1</span>
                        </li>
                        <li className='md:hidden cursor-pointer ' onClick={() => menuToggle === false ? setMenuToggle(true) : setMenuToggle(false)}><i className={`fa-solid ${menuToggle ? "fa-xmark" : "fa-bars"} text-2xl`}></i></li>
                    </ul>
                </div>
            </header>
        </>
    )
}
