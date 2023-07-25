import React, { useState } from 'react'
import Form from './Form.js'
import './Styles/Home.css'
import Students from './Students.js'

export default function Home() {

    const [data, setData] = useState([])

    return (
        <div>
            <div className='header'>
                Student Enrollement Form
            </div>
            <div className='main-container'>
                <Form setData={setData} data={data} />
                <Students std={data} />
            </div>
        </div>
    )
}
