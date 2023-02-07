import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function AddTask() {

    

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
                <input type='text' name='name' />
                <label>Day</label>
                <input type='text' name='name' />
                <label>Description</label>
                <input type='text' name='name' />
                <button >Submit</button>
            </div>
        </div>

    )
}

export default AddTask