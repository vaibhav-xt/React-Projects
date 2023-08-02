import React, { useEffect } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useNavigate } from 'react-router-dom'

export default function Page3() {
    const data = useSelector((state) => state.student)
    const navigate = useNavigate()

    useEffect(() => {
        if (!data.name && !data.age) {
            navigate('/page2')
        }
    })

    return (
        <div className='page3-container'>
            <p className='result'>Your name <span>{data.name}</span> aged <span>{data.age}</span> has been added to student system. <br /> You may now exit.</p>
        </div>
    )
}
