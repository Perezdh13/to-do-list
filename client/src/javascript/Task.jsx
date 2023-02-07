import React, { useEffect } from 'react'
import data from '../CRUD/db.json'
import { useNavigate } from 'react-router-dom';



function Task() {

  const getHead = () => {
    return Object.keys(data[0]);
  }

  let navigate = useNavigate()
  useEffect(() => {
    window.onload = function () {
      navigate("/")
    };
  }, [navigate]);

  return (
    <div className='task-page'>
      <h1>List of Task</h1>
      <div className='task-page-box'>
        
        
      </div>
    </div>
  )
}

export default Task