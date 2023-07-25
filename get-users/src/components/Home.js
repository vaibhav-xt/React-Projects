import './Home.scss'
import React, { useState } from 'react';
import NavBar from './NavBar/NavBar';
import loadPNG from '../components/img/loading.svg'

export default function Home() {

    const [users, setUsers] = useState({})
    const [loading, setLoading] = useState(false)
    const [display, setDisplay] = useState(false)

    const fetchUsers = async () => {
        const allUsers = await fetch('https://reqres.in/api/users?page=1')
        setLoading(true)
        const jsonRsponse = await allUsers.json()
        setUsers(jsonRsponse)
        setLoading(false)
        setDisplay(true)
    }

    const nextPage = async (flag) => {
        const allUsers = await fetch(`https://reqres.in/api/users?page=${flag ? 2 : 1}`)
        setLoading(true)
        const jsonRsponse = await allUsers.json()
        setUsers(jsonRsponse)
        setLoading(false)
        setDisplay(true)
    }

    return (
        <div className="App">
            <NavBar getAllUsers={fetchUsers} />
            <div className='users-container'>
                {!display && <h1 className='fetch'>click on Get Users to fetch data</h1>}
                {display && <div className='buttons'>
                    <button onClick={() => nextPage(false)}>Left</button>
                    <button onClick={() => nextPage(true)}>Right</button>
                </div>}
                {loading && <img src={loadPNG} alt="" />}
                <div className='users'>
                    {
                        display && users.data.map((user) => <div className='users-card' key={user.id}>
                            <div>
                                <img src={user.avatar} alt="" />
                            </div>
                            <div className='name'>
                                <h3>Name</h3>
                                <p>{user.first_name} {user.last_name}</p>
                            </div>
                            <div className='gmail'>
                                <h3>Gmail</h3>
                                <p>{user.email}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}
