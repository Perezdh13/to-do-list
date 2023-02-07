import React, { useEffect } from 'react'
import data from '../CRUD/data.json'
import { useNavigate } from 'react-router-dom';
import Read from '../CRUD/Read';
console.info(Read)

function Task() {
  const getHeadings = () => {
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
        <Read theadData={getHeadings()} tbodyData={data}/>
      </div>
    </div>
  )

}

export default Task