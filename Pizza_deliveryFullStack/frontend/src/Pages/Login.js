import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import background from '../img/bgPizza.jpg'
import { loginUser } from '../actions/userAction'
import { useDispatch } from 'react-redux'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')

    useEffect(() => {
        if (localStorage.getItem('currentUser')) {
            window.location.href = '/'
        }
    })

    const dispatch = useDispatch()
    const login = (e) => {
        if (password === cpassword) {
            e.preventDefault()
            const user = {
                email: email,
                password: password
            }
            dispatch(loginUser(user))
            setInterval(() => {
                window.location.reload()
            }, 1000)
        } else {
            alert("Password desn't match")
        }
    }

    return (
        <>
            <div className='min-h-[calc(100vh-80px)] relative flex justify-center items-center p-4' style={{ background: `url(${background})` }}>
                <div className='bg-white z-30 relative rounded-xl overflow-hidden max-w-[800px] h-full md:min-h-[400px] w-full flex flex-col justify-center sm:flex-row sm:justify-between'>
                    <form action="" className='p-8 flex flex-col justify-center items-center w-full sm:w-2/3 gap-4' onSubmit={login}>
                        <h1 className='text-2xl sm:text-4xl font-semibold'>Login to Your Account</h1>
                        <input type="email" placeholder='Email' className='max-w-[300px] w-full rounded-xl px-4 py-2 bg-slate-100' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder='Password' className='max-w-[300px] w-full rounded-xl px-4 py-2 bg-slate-100' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input type="password" placeholder='Confirm Password' className='max-w-[300px] w-full rounded-xl px-4 py-2 bg-slate-100' value={cpassword} onChange={(e) => setCPassword(e.target.value)} />
                        <a href="/" className='max-w-[300px] w-full'>Forget Password?</a>
                        <button type="submit" className='px-4 py-2 bg-red-700 hover:bg-red-500 text-white rounded-[999px] text-xl'>Sign In</button>
                    </form>
                    <div className='p-8 w-full sm:w-1/3 bg-red-700 text-white flex flex-col items-center justify-center'>
                        <h1 className='text-4xl font-bold'>New Here?</h1>
                        <Link to="/SignUp" className='transition-all duration-500 bg-white text-black font-semibold py-2 px-4 rounded-[999px] mt-4 text-xl hover:text-red-500'>Sign Up</Link>
                    </div>
                </div>
                <div className='absolute top-0 h-full w-full bg-gradient-to-l from-black/100 to-transparent'></div>
            </div>
        </>
    )
}
