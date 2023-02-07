import React, { useState } from 'react'
import Axios from 'axios'

function ServerPage() {

    const [taskName, setTaskName] = useState('')
    const [taskType, setTaskType] = useState('')
    const [taskDay, setTaskDay] = useState('')
    const [taskHour, setTaskHour] = useState('')
    const [taskDescription, setTaskDescription] = useState('')

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [day, setDay] = useState('');
    const [hour, setHour] = useState('');

    const submit = () => {
        Axios.post("http://localhost:3001/", {
            taskName: name,
            taskDescription: description,
            taskType: type,
            taskDay: day,
            taskHour: hour,
        }).then(() => {
            alert('tarea añadida');
        })

    };

    return (
        <div>
            <h1> TO-DO LIST</h1>
            <div className='main-page-enterData'>
                <label>task Name</label>
                <input type='text' name='name' onChange={(e) => { setTaskName(e.target.value) }} />
                <label>task Type</label>
                <input type='text' name='description' onChange={(e) => { setTaskType(e.target.value) }} />
                <label>Task Day</label>
                <input type='text' name="type" onChange={(e) => { setTaskDay(e.target.value) }} />
                <label>Task Hour</label>
                <input type='text' name="day" onChange={(e) => { setTaskHour(e.target.value) }} />
                <label>task Description</label>
                <input type='text' name="hour" onChange={(e) => { setTaskDescription(e.target.value) }} />
                <button onClick={submit} >Submit</button>
            </div>
        </div>
    )
}

export default ServerPage