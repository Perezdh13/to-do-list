import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function DeleteTask() {

  let navigate = useNavigate()
  useEffect(() => {
    window.onload = function () {
      navigate("/")
    };
  }, [navigate]);

  return (
    <div className='deleteTask-page'>
      <h1>Delete Task</h1>

    </div>
  )
}

export default DeleteTask