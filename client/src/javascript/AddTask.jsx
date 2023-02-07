import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import data from '../CRUD/data.json'

function AddTask() {
 let json = {data}
console.info(json)
    

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
                <label>task Name</label>
                <input type='text' name='name' />
                <label>Type</label>
                <input type='text' name='type' />
                <label>Day</label>
                <input type='text' name='day' />
                <label>Description</label>
                <input type='text' name='description' />
                <button >Submit</button>
            </div>
        </div>

    )
}

export default AddTask