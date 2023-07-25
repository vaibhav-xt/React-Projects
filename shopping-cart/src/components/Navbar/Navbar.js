import React from 'react'
import './Navbar.css'
import search from '../../icon/search.png'
import user from '../../icon/user.png'
import shopping from '../../icon/shopping.png'

export default function Navbar() {
    return (
        <header>
            <h1>TEST</h1>
            <nav>
                <ul>
                    <li><a href="/">Track Order</a></li>
                    <li><a href="/"><img src={user} alt="user" /></a></li>
                    <li><a href="/"><img src={search} alt="search" /></a></li>
                    <li><a href="/"><img src={shopping} alt="shopping" /></a></li>
                </ul>
            </nav>
        </header>
    )
}