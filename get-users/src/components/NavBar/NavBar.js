import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.scss'

export default function NavBar(props) {
    return (
        <div className='container'>
            <Link to="/" className='logo'>User Zone</Link>
            <button onClick={props.getAllUsers}>Get Users</button>
        </div>
    )
}
