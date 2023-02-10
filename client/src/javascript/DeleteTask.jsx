import React, { useState } from 'react'

import { Table} from "reactstrap"
import deleteButton from '../img/delete.png'


function DeleteTask() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || []

  const [task, setTask] = useState([...tasks])
  
  
function removeTask(id){
  let tasks = JSON.parse(localStorage.getItem("tasks")) || []
  let updatedTasks = tasks.filter(task => task.id !== id)
  localStorage.setItem("tasks", JSON.stringify(updatedTasks))
  setTask(updatedTasks)
}
 

  return (
    <div className='deleteTask-page'>
      <h1>Delete Task</h1>
      <div className='deleteTask-page-box'>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {task.map((item) => (
              <tr>
                <td>{item.Name}</td>
                <td>{item.Description}</td>
                <td><img  src={deleteButton} alt='delete' onClick={() =>removeTask(item.id)}/></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

    </div>
  )
}

export default DeleteTask