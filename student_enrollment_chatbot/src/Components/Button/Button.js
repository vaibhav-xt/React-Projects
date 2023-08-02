import React, { useState } from 'react'
import "./Button.css"

export default function Button(props) {

    const [btnState, setBtnState] = useState({
        position: {
            marginLeft: "3rem",
            borderRadius: "9999px",
            padding: ".5rem 1rem .5rem 1rem"
        },
        flag: false
    })

    const btnHandler = () => {
        setBtnState({
            position: { marginLeft: "70%" },
            flag: true
        })
        props.actionProvider.enterName();
    }

    return (
        <div className='btn-container'>
            <button className={`btn-handler ${btnState.flag ? "disabled" : ""}`} style={btnState.position} onClick={(e) => btnHandler(e)}>Got it!</button>
        </div>
    )
}
