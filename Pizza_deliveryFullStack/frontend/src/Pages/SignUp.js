import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import background from '../img/bgPizza.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../actions/userAction'


export default function SignUp() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')

    const dispatch = useDispatch()

    const registerState = useSelector(state => state.registerUserReducer)
    const { error, success } = registerState


    const register = (e) => {
        e.preventDefault()
        if (password !== cpassword) {
            alert("password doesn't match")
        } else {
            const user = {
                firstName,
                lastName,
                address,
                email,
                password
            }
            console.log(user);
            dispatch(registerUser(user))
            window.location.href = '/login'
        }
    }

    return (
        <>
            <div className='min-h-[calc(100vh-80px)] relative flex justify-center items-center p-4' style={{ background: `url(${background})` }}>
                <div className='bg-white z-30 relative rounded-xl overflow-hidden max-w-[800px] min-h-[400px] w-full flex flex-col justify-center sm:flex-row-reverse sm:justify-between'>
                    <form action="" className='p-8 flex flex-col justify-center items-center w-full sm:w-2/3 gap-4' onSubmit={register}>
                        {error && (<p className='bg-red-50 text-xl w-full text-center'>Invalid Credentials</p>)}
                        {success && (<p className='bg-green-50 text-xl w-full text-center'>Sign Up successfully!</p>)}
                        <h1 className='text-2xl sm:text-4xl font-semibold'>New Account</h1>
                        <input required value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder='First Name' className='max-w-[300px] w-full rounded-xl px-4 py-2 bg-slate-100' />
                        <input required value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder='Last Name' className='max-w-[300px] w-full rounded-xl px-4 py-2 bg-slate-100' />
                        <input required value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder='Address' className='max-w-[300px] w-full rounded-xl px-4 py-2 bg-slate-100' />
                        <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' className='max-w-[300px] w-full rounded-xl px-4 py-2 bg-slate-100' />
                        <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className='max-w-[300px] w-full rounded-xl px-4 py-2 bg-slate-100' />
                        <input required value={cpassword} onChange={(e) => setCPassword(e.target.value)} type="password" placeholder='Confirm Password' className='max-w-[300px] w-full rounded-xl px-4 py-2 bg-slate-100' />
                        <a href="/" className='max-w-[300px] w-full'>Forget Password?</a>
                        <button type="submit" className='px-4 py-2 bg-red-700 hover:bg-red-500 text-white rounded-[999px] text-xl'>Sign Up</button>
                    </form>
                    <div className='p-8 w-full sm:w-1/3 bg-red-700 text-white flex flex-col items-center justify-center'>
                        <h1 className='text-2xl font-bold'>Welcome Back</h1>
                        <Link to="/login" className='transition-all duration-500 bg-white text-black font-semibold py-2 px-4 rounded-[999px] mt-4 text-xl hover:text-red-500'>Sign In</Link>
                    </div>
                </div>
                <div className='absolute top-0 h-full w-full bg-gradient-to-l from-black/100 to-transparent'></div>
            </div>
        </>
    )
}
