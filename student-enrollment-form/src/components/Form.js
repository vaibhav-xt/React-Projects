import React, { useState } from 'react'
import './Styles/Form.css'

export default function Form(props) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [website, setWebsite] = useState("")
    const [image, setImage] = useState("")
    const [gender, setGender] = useState("")
    const [skills, setSkills] = useState([])

    const checkbox = (event) => {
        const value = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setSkills([...skills, value]);
        } else {
            setSkills(skills.filter(item => item !== value));
        }
    }

    const stored = props.data
    const setData = props.setData

    const submitForm = (e) => {
        e.preventDefault()
        const data = {
            name: name,
            email: email,
            website: website,
            image: image,
            gender: gender,
            skills: skills,
        }
        setData([...stored, data])
    }

    const clearForm = () => {
        setName("");
        setEmail("");
        setWebsite("");
        setImage("");
        setGender("");
        setSkills([]);
    };

    return (
        <form onSubmit={submitForm}>
            <div >
                <p>Name</p>
                <input required type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <p>Email</p>
                <input required type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                <p>Website</p>
                <input required type="text" value={website} onChange={e => setWebsite(e.target.value)} />
            </div>
            <div>
                <p>Image Link</p>
                <input required type="text" value={image} onChange={e => setImage(e.target.value)} />
            </div>
            <div className='gender-container'>
                <p>Gender</p>
                <div>
                    <label htmlFor="male">
                        <input required type="radio" value="Male" checked={gender === "Male"} onChange={(e) => setGender(e.target.value)} name="gender" id="male" />
                        <p>Male</p>
                    </label>
                    <label htmlFor="female">
                        <input required type="radio" value="Female" name="gender" id="female" checked={gender === "Female"} onChange={(e) => setGender(e.target.value)} />
                        <p>Female</p>
                    </label>
                </div>
            </div>
            <div className='skills'>
                <p>Skills</p>
                <div>
                    <label htmlFor="java">
                        <input type="checkbox" name="skills" id="java" value={"Java"} checked={skills.includes('Java')} onChange={checkbox} />
                        <p>Java</p>
                    </label>
                    <label htmlFor="html">
                        <input type="checkbox" name="skills" id="html" value={"HTML"} checked={skills.includes('HTML')} onChange={checkbox} />
                        <p>HTML</p>
                    </label>
                    <label htmlFor="css">
                        <input type="checkbox" name="skills" id="css" value={"CSS"} checked={skills.includes('CSS')} onChange={checkbox} />
                        <p>CSS</p>
                    </label>
                </div>
            </div>
            <div className='buttons'>
                <button type="submit">Enroll Student</button>
                <button type='reset' onClick={clearForm}>Clear</button>
            </div>
        </form>
    )
}
