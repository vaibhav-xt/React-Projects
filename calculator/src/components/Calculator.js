import React, { useState } from 'react'
import './Calculator.css'

export default function Calculator() {

    const array = [1, 2, 3, "/", 4, 5, 6, "-", 7, 8, 9, "+", ".", 0, "=", "*"]
    const [display, setDisplay] = useState("")
    const valueFetch = (e) => {
        const value = e.target.innerText
        if (value === "=") {
            try {
                setDisplay(eval(display))
            } catch (error) {
                alert(error)
            }
        } else {
            setDisplay(display + value)
        }
    }

    const clear = () => {
        try {
            setDisplay(display.slice(0, -1))
        } catch (error) {
            setDisplay("")
        }
    }

    return (
        <div className='bg-black'>
            <div className='container'>
                <h1>Calculator</h1>
                <div className='calculator'>
                    <div className='display'>
                        <p>{display}</p>
                        <p onClick={clear}>C</p>
                    </div>
                    <div className='buttons'>
                        {
                            array.map((num, index) => <p key={index} style={{ "backgroundColor": num === "=" ? "#fc0075" : "blueviolet" }} onClick={valueFetch}>{num}</p>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
