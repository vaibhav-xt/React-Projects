import React from 'react'
import "./Page.css"
import { useNavigate } from 'react-router-dom'

export default function Page1() {
    const navigate = useNavigate();
    return (
        <div className='page1-container'>
            <h1>Enter into Student Info System</h1>
            <button onClick={() => navigate("/page2")}>Enroll Now!</button>
        </div>
    )
}
