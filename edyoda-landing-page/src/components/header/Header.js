import React from 'react'
import './Header.css'
import edyodaLogo from '../../images/LOGO.svg'
import arrowDown from '../../images/arrow-down.svg'
import search from '../../images/search.svg'

export default function Header() {
    return (
        <header className='header'>
            <div className='header-left'>
                <a href="/"><img className='eyoda-logo' src={edyodaLogo} alt="EdYoda Logo" /></a>
                <nav>
                    <li>Courses <img src={arrowDown} alt="Arrow" /></li>
                    <li>Programs <img src={arrowDown} alt="Arrow" /></li>
                </nav>
            </div>
            <div className='header-right'>
                <img className='search' src={search} alt="search" />
                <a href="/">Log in</a>
                <button>JOIN NOW</button>
            </div>
        </header>
    )
}
