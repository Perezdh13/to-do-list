import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import check from '../img/check-mark.png'

function AddTask() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []

    const [task, setTasks] = useState([...tasks])
    const [name, setName] = useState("");
    const [day, setDay] = useState("");
    const [description, setDescription] = useState("");
   





    function addTask() {
        setTasks([...task, { id: task.length + 1, Name: name, Day: day, Description: description }]);
        setName("");
        setDay("");
        setDescription("");
    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(task));
    }, [task]);



    let navigate = useNavigate()
    useEffect(() => {
        window.onload = function () {
            navigate("/")
        };
    }, [navigate]);



    return (
        <div className='addTask-page'>
            <h1>Add New Task</h1>
            <div className='addTask-page-enterBox'>
                
                <input className='addTask-page-enterBox-name' value={name} placeholder='Name...' onChange={e => setName(e.target.value)} />
                
                <input className='addTask-page-enterBox-day' value={day} placeholder='Day...' onChange={e => setDay(e.target.value)} />
    
                <input className='addTask-page-enterBox-description' value={description} placeholder='Description......' onChange={e => setDescription(e.target.value)} />
                <img src ={check}  alt='check'onClick={addTask}/>
            </div>
        </div>

    )
}

export default AddTask