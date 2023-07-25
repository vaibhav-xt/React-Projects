import React from 'react'
import './Styles/Students.css'

export default function Students(props) {

    const data = props.std
    return (
        <div className='students-container'>
            <h1>Enrolled Students</h1>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Image</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data.map((std, index) => <tr key={index}>
                            <td className='details'>
                                <h3>{std.name}</h3>
                                <p><a href={`mailto: ${std.email}`} target='_blank' rel="noopener noreferrer">{std.email}</a></p>
                                <p><a href={`mailto: ${std.website}`} target='_blank' rel="noopener noreferrer">{std.website}</a></p>
                                <p>{std.gender}</p>
                                <div className='skills'>
                                    {
                                        std.skills.map((skill, index) => <span key={index}>{skill}</span>)
                                    }
                                </div>
                            </td>
                            <td className='image-container'>
                                <div>
                                    <img src={std.image} alt="" />
                                </div>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}
