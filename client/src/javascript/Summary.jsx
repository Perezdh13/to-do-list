import React, { useEffect } from 'react'
import Task from './Task';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Summary() {
 
    
    let navigate = useNavigate()
    useEffect(() => {
        window.onload = function () {
            navigate("/")
        };
    }, [navigate]);

  return (
    <div className='summary-page'>
      <div className='summary-page-calendar'>
        <Link to='/calendar'>      
          <h1>Calendar</h1>
        </Link>  
      </div>
      <div className='summary-page-task'>
        <Link to='/task'>
          <h1>Task</h1>
          <div className='summary-page-task-box'>
          
          </div>
        </Link>
      </div>
      <div className='summary-page-addTask'>
        <Link to='/addTask'>
          <h1>Add Task</h1>
        </Link>
      </div>
      <div className='summary-page-deleteTask'>
        <Link to='/deleteTask'>
          <h1>Delete Task</h1>
        </Link>
      </div>

    </div>
  )
}

export default Summary