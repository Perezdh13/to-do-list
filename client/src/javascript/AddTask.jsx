import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import check from '../img/check-mark.png'

function AddTask() {

    let data = JSON.parse(localStorage.getItem("tasks")) || []

    let [alertTxt, setAlertTxt] = useState("")
    let [task, setTask] = useState([...data])
    let [name, setName] = useState("");
    let [day, setDay] = useState("");
    let [description, setDescription] = useState("");


    function addTask() {
        let newId = task.length > 0 ? task[task.length - 1].id + 1 : 1;
        setTask([...task, { id: newId, Name: name, Day: day, Description: description }]);
        setName("");
        setDay("");
        setDescription("");

        setAlertTxt("New task added");
        setTimeout(() => {
            setAlertTxt('');
        }, 2000);

        
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
                <img src={check} alt='check' onClick={addTask} />
            </div>
            <div className='addTask-page-popUp'>
                <h1>{alertTxt}</h1>
            </div>
        </div>
    )
}

export default AddTask