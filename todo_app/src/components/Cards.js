import React from 'react'

export default function Cards(props) {

    const list = props.list

    const textUnderline = () => {
        const newArr = list.map((task) => task.task === props.task ? task.flag ? { task: task.task, flag: false } : { task: task.task, flag: true } : task)
        props.setList(newArr)
    }

    const del = () => {
        if (props.flag) {
            const newArr = list.filter((task) => task.task !== props.task)
            props.setList(newArr)
        } else {
            alert('task not completed!')
        }
    }
    return (
        <div className='cards' style={props.flag ? { backgroundColor: "#0084ff", color: "white" } : { backgroundColor: props.bgColor }}>
            <p>
                <i className="fa-solid fa-check" style={props.flag ? { 'display': "block" } : { 'display': 'none' }}></i>
            </p>
            <p style={props.flag ? { 'textDecoration': 'line-through' } : { 'textDecoration': 'none' }} onClick={textUnderline}>{props.task}</p>
            <i className="fa-solid fa-xmark" onClick={del}></i>
        </div>
    )
}
