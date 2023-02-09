import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from 'react-router-dom';
import { Table } from "reactstrap"



function Task() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || []
  
  const [data] = useState([...tasks])
  
  

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
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Day</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((task) => (
              <tr>
                <td>{task.Name}</td>
                <td>{task.Day}</td>
                <td>{task.Description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  )

}

export default Task