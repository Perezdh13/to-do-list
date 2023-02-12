import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Table } from "reactstrap"



function Task() {
  let data = JSON.parse(localStorage.getItem("tasks")) || []

  const [task, setData] = useState([...data])


  const changeDescription = (index, newDescription) => {
    const updatedData = [...task];
    updatedData[index].Description = newDescription;
    setData(updatedData);
    localStorage.setItem("tasks", JSON.stringify(updatedData));
  };


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
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.Day}</td>
                <td>
                  <textarea
                    value={item.Description} onChange={(event) => changeDescription(index, event.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  )

}

export default Task
